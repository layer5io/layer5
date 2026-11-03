import test from 'node:test';
import assert from 'node:assert/strict';
import { parseGnuTime, parseBsdTime, parseGoMemory, detectMethod } from '../bench.mjs';

const gnuSample = `
	Command being timed: "hugo --contentDir .bench/content"
	User time (seconds): 2.15
	System time (seconds): 0.45
	Percent of CPU this job got: 120%
	Elapsed (wall clock) time (h:mm:ss or m:ss): 0:02.15
	Average shared text size (kbytes): 0
	Average unshared data size (kbytes): 0
	Average stack size (kbytes): 0
	Average total size (kbytes): 0
	Maximum resident set size (kbytes): 217088
	Average resident set size (kbytes): 0
	Major (requiring I/O) page faults: 0
	Minor (reclaiming a frame) page faults: 43210
	Voluntary context switches: 1234
	Involuntary context switches: 56
	Swaps: 0
	File system inputs: 0
	File system outputs: 0
	Socket messages sent: 0
	Socket messages received: 0
	Signals delivered: 0
	Page size (bytes): 4096
	Exit status: 0
`;

const gnuMinutesSample = `
	Command being timed: "hugo"
	Elapsed (wall clock) time (h:mm:ss or m:ss): 1:12.34
	Maximum resident set size (kbytes): 102400
`;

const gnuHoursSample = `
	Elapsed (wall clock) time (h:mm:ss or m:ss): 1:02:03.45
	Maximum resident set size (kbytes): 51200
`;

const bsdSample = `
        1.45 real         0.90 user         0.55 sys
             217088000  maximum resident set size
                     0  average shared memory size
                     0  average unshared data size
                     0  average unshared stack size
                 43210  page reclaims
                     0  page faults
                     0  swaps
                     0  block input operations
                     0  block output operations
                     0  messages sent
                     0  messages received
                     0  signals received
                  1234  voluntary context switches
                    56  involuntary context switches
`;

const bsdAlternativeSample = `
12.34 real 8.10 user 4.24 sys
268435456 maximum resident set size
`;

test('parseGnuTime: parses seconds and calculates MB from kbytes', () => {
  const res = parseGnuTime(gnuSample);
  assert.equal(res.build_seconds, 2.15);
  assert.equal(res.memory_mb, 212); // Math.round(217088 / 1024)
});

test('parseGnuTime: parses mm:ss and hh:mm:ss time formats', () => {
  const resMin = parseGnuTime(gnuMinutesSample);
  assert.equal(resMin.build_seconds, 72.34);
  assert.equal(resMin.memory_mb, 100);

  const resHour = parseGnuTime(gnuHoursSample);
  assert.equal(resHour.build_seconds, 3723.45);
  assert.equal(resHour.memory_mb, 50);
});

test('parseGnuTime: throws on invalid output', () => {
  assert.throws(() => parseGnuTime('random output without stats'), /missing elapsed time or max RSS/);
});

test('parseBsdTime: parses real time and calculates MB from bytes', () => {
  const res = parseBsdTime(bsdSample);
  assert.equal(res.build_seconds, 1.45);
  assert.equal(res.memory_mb, 207); // Math.round(217088000 / 1048576)
});

test('parseBsdTime: parses alternative whitespace and values', () => {
  const res = parseBsdTime(bsdAlternativeSample);
  assert.equal(res.build_seconds, 12.34);
  assert.equal(res.memory_mb, 256); // 268435456 / 1048576 = 256
});

test('parseBsdTime: throws on invalid output', () => {
  assert.throws(() => parseBsdTime('random output without stats'), /missing real time or max RSS/);
});

test('parseGoMemory: extracts Sys MB from Hugo output', () => {
  assert.equal(parseGoMemory('Sys = 120.9 MB\nAlloc = 75 MB'), 121);
  assert.equal(parseGoMemory('No memory stats here'), 0);
});

test('detectMethod: returns a valid method string for current platform', () => {
  const method = detectMethod();
  assert.match(method, /^(gnu-time-max-rss|bsd-time-max-rss|go-printMemoryUsage-approx)$/);
  if (process.platform === 'win32') {
    assert.equal(method, 'go-printMemoryUsage-approx');
  }
});

