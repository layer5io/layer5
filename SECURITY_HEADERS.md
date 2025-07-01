# Security Headers Implementation

This document describes the security headers implemented to protect the Layer5 website against clickjacking attacks and other security vulnerabilities.

## Overview

Clickjacking is an attack where an attacker tricks users into clicking on hidden or disguised elements by overlaying a malicious page on top of a legitimate one. This can lead to unintended actions or data theft.

## Implemented Security Measures

### 1. X-Frame-Options Header

**Location**: `_headers` file
**Value**: `SAMEORIGIN`

This header prevents the website from being embedded in iframes on other domains, while still allowing it to be embedded on the same origin.

```http
X-Frame-Options: SAMEORIGIN
```

### 2. Content Security Policy (CSP)

**Location**: `src/html.js` and `_headers` file
**Directive**: `frame-ancestors 'self'`

The CSP frame-ancestors directive provides additional protection by specifying which sites can frame our content. The `'self'` value only allows the same origin to frame the content.

```http
Content-Security-Policy: frame-ancestors 'self'
```

### 3. Comprehensive CSP Policy

**Location**: `src/html.js`

A more comprehensive CSP policy is implemented in the HTML template that includes:

- `frame-ancestors 'self'` - Prevents framing by other sites
- `default-src 'self'` - Restricts default sources to same origin
- `script-src 'self' 'unsafe-inline'` - Allows inline scripts and same-origin scripts
- `style-src 'self' 'unsafe-inline'` - Allows inline styles and same-origin styles
- `frame-src` - Allows specific trusted domains for iframes (YouTube, Google Docs, etc.)

## Configuration Files

### `_headers` File

```http
# Security headers to prevent clickjacking
/*
  X-Frame-Options: SAMEORIGIN
  Content-Security-Policy: frame-ancestors 'self'
```

### `src/html.js` File

```javascript
<meta
  httpEquiv="Content-Security-Policy"
  content="frame-ancestors 'self'; default-src 'self'; script-src 'self' 'unsafe-inline' https://fonts.gstatic.com https://v8hx52m354g0.statuspage.io; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https:; frame-src 'self' https://www.youtube.com https://w.soundcloud.com https://calcotestudios.com https://docs.google.com https://us15.list-manage.com https://hook.us1.make.com https://hook.us2.make.com https://calcotestudios.us15.list-manage.com;"
/>
```

## Testing

### Manual Testing

1. **Test X-Frame-Options**:
   ```bash
   curl -I https://layer5.io
   ```
   Look for: `X-Frame-Options: SAMEORIGIN`

2. **Test CSP**:
   ```bash
   curl -I https://layer5.io
   ```
   Look for: `Content-Security-Policy` header with `frame-ancestors 'self'`

### Automated Testing

Run the test script to verify headers:

```bash
node test-security-headers.js
```

## Acceptance Tests

The implementation ensures that:

1. ✅ **Signing into https://cloud.layer5.io is unaffected**
   - The CSP allows necessary domains for authentication
   - X-Frame-Options doesn't interfere with legitimate same-origin requests

2. ✅ **Submission of forms like https://layer5.io/newcomers is unaffected**
   - Form submission endpoints are allowed in the CSP
   - No blocking of legitimate form submissions

3. ✅ **Calendar links to meet with the team is unaffected**
   - Calendar integration domains are included in the CSP
   - External calendar services can still be accessed

## External Services Allowed

The following external services are explicitly allowed in the CSP to maintain functionality:

- **YouTube**: For embedded videos
- **Google Docs**: For embedded presentations
- **SoundCloud**: For embedded audio
- **Mailchimp**: For newsletter signups
- **Make.com**: For form processing
- **Statuspage**: For status monitoring

## Browser Support

- **X-Frame-Options**: Supported in all modern browsers
- **CSP frame-ancestors**: Supported in all modern browsers (Chrome 40+, Firefox 36+, Safari 10+)

## Security Benefits

1. **Prevents Clickjacking**: Users cannot be tricked into clicking on hidden elements
2. **Protects User Actions**: Prevents unauthorized form submissions or button clicks
3. **Maintains Functionality**: All legitimate features continue to work
4. **Defense in Depth**: Multiple layers of protection (X-Frame-Options + CSP)

## Monitoring

Regular monitoring should be performed to ensure:

1. Headers are properly set on all pages
2. No legitimate functionality is broken
3. New external services are properly added to CSP if needed

## Troubleshooting

If issues arise:

1. Check browser developer tools for CSP violations
2. Verify headers are being set correctly
3. Ensure new external domains are added to the CSP if needed
4. Test functionality on affected pages

## References

- [OWASP Clickjacking Defense](https://owasp.org/www-community/attacks/Clickjacking)
- [MDN X-Frame-Options](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options)
- [MDN Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) 