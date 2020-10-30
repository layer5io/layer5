import React from "react";
import Howitworks from "./howitworks.style";

export default function HowBoundaryWorksDiagram({ activeExampleIndex }) {
    return (
        <Howitworks>
            <div className='root' style={{padding: "0px"}}>
                <svg xmlns="http://www.w3.org/2000/svg" className="scroll" viewBox="0 0 559.92 498.86">
                    <g style={{ isolation: "isolate" }}>
                        <g id="Layer_2" data-name="Layer 2">
                            <path
                                d="M396.22 246.69a109.35 109.35 0 11-109.34-109.34"
                                strokeDasharray="1.5 5"
                                strokeWidth="1.5"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                stroke="#00d3a9"
                                fill="none"
                            />

                            {/* Hosts & Services */}
                            <g>
                                {/* service Mesh - 3 */}
                                <rect  className={activeExampleIndex >= 3 ? "show " : "render "} x="100.07" y="110.04" width="56" height="56" rx="3.5" />
                                {/* service Mesh - 4 */}
                                <rect className={activeExampleIndex >= 4 ? "show " : "render "} x="100.07" y="330.04" width="56" height="56" rx="3.5" />
                                {/* service Mesh - 5 */}
                                <rect  className={activeExampleIndex >= 6 ? "show " : "render "} x="420.07" y="330.04" width="56" height="56" rx="3.5" />
                                {/* service Mesh - 6 */}
                                <rect className={activeExampleIndex >= 7 ? "show " : "render "} x="420.03" y="110.04" width="56" height="56" rx="3.5" />
                                {/* service Mesh - 7 */}
                                <rect  className={activeExampleIndex >= 8 ? "show " : "render "} x="259.05" y="0.04" width="56" height="56" rx="3.5" />
                                {/* service Mesh - 8 */}
                                <rect className={activeExampleIndex >= 5 ? "show " : "render "} x="259.05" y="437.04" width="56" height="56" rx="3.5" />
                            </g>

                            {/* Top-right arrow segment, always active */}
                            <path
                                d="M395 226.76a115.51 115.51 0 00-84-88.92"
                                className='arrowSegment'
                            />

                            {/* Arrow (Example 1) */}
                            <g
                                className={activeExampleIndex !== 0 ? " " : "inactive arrowOne"}
                            >
                                {
                                    activeExampleIndex === 0 &&
                                <circle className='spacer' cx="367.07" cy="319.22" r="11.19" />
                                } 
                                <path
                                    className={activeExampleIndex !== 0 ? "render arrowHead" : "show arrowHead"}
                                    d="M375.62 319.52l-11.39 3.66 2.51-11.69 8.88 8.03z"
                                />
                                <path
                                    d="M370.08 316.86a108.68 108.68 0 0023.67-47.78"
                                    className={activeExampleIndex !== 0 ? "render-arrow arrowSegment" : "show-arrow arrowSegment"}
                                />
                            </g>

                            {/* Arrow (Example 2) */}
                            <g
                                className={ activeExampleIndex !== 1 ? " " : "inactive arrowTwo"}
                            >
                                {
                                    activeExampleIndex === 1 &&
                    <circle className='spacer' cx="209.12" cy="323.72" r="11.19" />
                                }
              
                                <path
                                    className={activeExampleIndex !== 1 ? "render arrowHead" : "show arrowHead"}
                                    d="M209.37 332.4l-3.1-11.56 11.56 3.09-8.46 8.47z"
                                />
                                <path
                                    d="M212.3 327a108.51 108.51 0 0046.56 26"
                                    className={activeExampleIndex !== 1 ? "render-arrow arrowSegment" : "show-arrow arrowSegment"}
                                />
                                <path
                                    className={activeExampleIndex !== 1 ? "render-arrow arrowSegment" : "show-arrow arrowSegment"}
                                    d="M307.46 355.47A115.53 115.53 0 00394 269M395 226.76a115.51 115.51 0 00-84-88.92"
                                />
                            </g>

                            {/* Arrow (Example 3) */}
                            <g
                                className={activeExampleIndex !== 2 ? " " : "inactive arrowThree"}
                            >
                                {
                                    activeExampleIndex >= 2 &&
                    <circle className='spacer' cx="206.57" cy="172.98" r="11.19" />
                                } 
       
                                <path
                                    className={activeExampleIndex >= 2 ? "show arrowHead" : "render  arrowHead"}
                                    d="M198.03 172.68l11.39-3.67-2.52 11.7-8.87-8.03z"
                                />
                                <path
                                    d="M203.57 175.33a108.58 108.58 0 00-23.67 47.78"
                                    className={activeExampleIndex >= 2 ? "show-arrow arrowSegment" : "render-arrow arrowSegment"}
                                />
                                <path
                                    d="M396.22 246.69a109.35 109.35 0 11-187.39-76.58"
                                    className={activeExampleIndex >= 2 ? "show-arrow arrowSegment" : "render-arrow arrowSegment"}
                                />
               
                            </g>

                            {/* Layer5 logo */}
                            <g>
                                <image
                                    className='dropShadow'
                                    width="91"
                                    height="91"
                                    transform="translate(241.32 204.91)"
                                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFsAAABbCAYAAAAcNvmZAAAACXBIWXMAAAsSAAALEgHS3X78AAAEjklEQVR4Xu2dW1LbQBBFj8FOgDzIu7KDLC7rYXHsIS+eBmOsfMw002qNLDtU+kPqUzUlIdtycXTdHvljetY0DYEP86EnbGP27fts6DljpDk/+6eEznZJtpFqBU9NuBb2tL/LBdgqW0memYHZnxqNGq2/t0nvlZ1FyzioDCt/Cmi5m8qQ49WkV2Ur0QfAYR5zsz2kSG+9nHFhy4YIfcxjncejGtWUd74glWgRusjjBfAybxcU6TbdY5ctoh/yuAdWakAR3qKVbJPoOUXwcR4neSvS5YJMoZxo0WuS5DtgCdzmcZePS9I3Ot21qZ+kekGS+gp4DbwF3uT9k/zYglJO9OvHhK3Ta1Kil8ANcAVcUhzoUjNTry/JNuVjARxRJL8HPuTtaT5+TCkntdo9JrTANSnBt8AF8Af4CfzO+1f5sRUm3TbZtoQck2R/AL4An/L+W0o5mTP+mYnIllp9B1yTPvUv8nMeSYKlhq/JMxOhT/YhSeQJqXS8J4n+CnwkpVveSJItrx8jOtkrUgm5pIiWYzeU2q1LK9CWXftyPCaVjFNSoj8Cn4F3lLrdNwUcGzrZt7RF35DkH9H+HhOn1TICJdnyBXlCqd2nJNEiW2YkU0v2Ih9fkcqJnqVZ2U/Uyoh8Sdamfq9IJ5YhsuWkU5Atzh5ITo4oiZZ7D51qZt++z5rzs2Yuf+QT6FJib2pkbi1bubnRsseMyIbyv+sbPCtaqJYRK1wSLinXJ9RjCvUaynxZfhs6NNvB34y2/Z6tU35g9u1JpyAbuv9zbfTSmZ4YbNr1saliXQxKFoZka2pvEhQG3fTJjiT/B/ZJdvBMQrYjIduRkO1IyHYkZDsSsh0J2Y6EbEdCtiMh25GQ7UjIdiRkOxKyHQnZjoRsR0K2IyHbkZDtSMh2JGQ7ErIdCdmOhGxHQrYjIduRkO1IyHYkZDsSsh0J2Y6EbEdCtiMh25GQ7UjIdiRkOxKyHQnZjoRsR0K2IyHbkZDtSMh2JGQ7ErIdCdmOhGxHQrYjfbJl0UDUNngm+yTbXoC4CG0G3QzJrp1g6pJrodvJybZFFPX6oxuzv2HPNxoBzY6jFy27drVsxwrbtUI+GVNYjs6G7dFsB0M4B2jOz5q8+K1Oswi1XStkKxdK1vaH8UrXXh5I/7/e6iCKcP1aoFtGdKLXFLlLysrneun5NdNcP1s6eCxJq8DfUaRr4Q1AX88DaPdhuSed9Jq08rkWvWLaK8NfkJxcU8Tf58drCe/UbLl6kuplPtkFZXFy8mPR8wB+kbp4XJA+9ZLwTrqhXkYk2ZLqK8rK51DW+I9uHkn0D0rLFEl3p5MH9MvWyb4klQooH6HoU9PtU3NJ6U8jsltlpNbu6oDS7+CI6MDUqK3IrnVgkvqta/emOT97SnjtC1J/XEScTHmWpJNHb7H+3mLSealVr4Fui8LomtfBzpn1bK3WNa/axA0qyc43ONC+Ovpq6iYTtVo9dtlauL671nfW7QRnotPpftj6bYcc373T6dOD0cO3j0aN1t//1MO39aToTq2xZSXtPLc79RDRd30/niU72I+/dqcU9Cr+vjoAAAAASUVORK5CYII="
                                />
                                <rect
                                    className='boundaryFill'
                                    x="251.05"
                                    y="211.38"
                                    width="40"
                                    height="28"
                                    rx="4.5"
                                />
                                <rect
                                    className='boundaryFill'
                                    x="286.05"
                                    y="256.38"
                                    width="35"
                                    height="28"
                                    rx="4.5"
                                />
                                <rect
                                    className='layerFill'
                                    x="251.05"
                                    y="240.38"
                                    width="72"
                                    height="16"
                                    rx="4.5"
                                />
                                <rect
                                    className='layerFill'
                                    x="291.05"
                                    y="211.38"
                                    width="23"
                                    height="30"
                                    rx="4.5"
                                />
                                <rect
                                    className='layerFill'
                                    x="251.05"
                                    y="240.38"
                                    width="36"
                                    height="40"
                                    rx="4.5"
                                />
                                <svg 
                                    version="1.0" 
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="55.000000pt" 
                                    x="251.05"
                                    y="211.38" height="55.000000pt" 
                                    viewBox="0 0 568.000000 568.000000"
                                    preserveAspectRatio="xMidYMid meet">
                                    <g 
                                        transform="translate(0.000000,568.000000) scale(0.100000,-0.100000)"
                                        fill="#3c494f" 
                                        stroke="#3c494f">
                                        <path 
                                            d="M0 2840 l0 -2840 2840 0 2840 0 0 2840 0 2840 -2840 0 -2840 0 0
                    -2840z m2950 1515 l0 -355 -585 0 -585 0 0 -175 0 -175 -435 0 -435 0 0 530 0
                    530 1020 0 1020 0 0 -355z m1720 0 l0 -355 -740 0 -740 0 0 355 0 355 740 0
                    740 0 0 -355z m-2890 -1035 l0 -100 1238 0 c1372 0 1296 3 1442 -67 102 -49
                    222 -168 274 -272 54 -106 66 -176 66 -383 l0 -178 -435 0 -435 0 0 130 0 130
                    -1510 0 -1510 0 0 420 0 420 435 0 435 0 0 -100z m3020 -1547 c0 -349 -3 -374
                    -61 -493 -45 -92 -159 -203 -259 -252 -139 -68 -142 -68 -975 -68 l-745 0 0
                    355 0 355 585 0 585 0 0 210 0 210 435 0 435 0 0 -317z m-3090 87 l0 -190 405
                    0 405 0 0 -356 0 -355 -572 4 c-511 3 -579 5 -633 21 -95 28 -192 84 -260 151
                    -69 69 -106 126 -144 224 -25 65 -25 72 -29 379 l-4 312 416 0 416 0 0 -190z"/>
                                    </g>
                                </svg>
              
                            </g>

                            {/* Users */}
                            <g>
                                <rect x="259.05" y="107.99" width="56" height="56" rx="3.5" />
                                <path
                                    className='iconLines'
                                    d="M292.05 146v-2a4 4 0 00-4-4h-8a4 4 0 00-4 4v2"
                                />
                                <circle className='iconLines' cx="284.05" cy="131.99" r="4" />
                                <path
                                    className='iconLines'
                                    d="M298.05 146v-2a4 4 0 00-3-3.87M291.05 128.12a4 4 0 010 7.75"
                                />
                                
                            </g>

                            {/* Authenticate */}
                            <g className='authenticate'>
                                <image
                                    className='dropShadow'
                                    width="75"
                                    height="75"
                                    transform="translate(363.32 212.91)"
                                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAYAAAA4TnrqAAAACXBIWXMAAAsSAAALEgHS3X78AAAD+0lEQVR4Xu2cW1LbQBBFj41t3iEEKllCFpf1sDj2kJd5GtugfMw00xqNLHXyEQn6VnVJth5UH26PZYruSVVVuPpp1nVCmyZfv026zhmqquurv3LIpI+zMjBt+2ORTvh1vw/AnbAiJB0UXo9RlYra613QirCUk6YEKNNCaHhjkYbzUgh5v+i0BqzMTXsqZjHktQAbelnmZSdAnmNsYzyrKLqsbYEXUDNgoWIfmMfQwPR1Q1MOS0BtYjwBaxWQgNVUc1Z01ZQEah84AI5iHMbX+ySX5cCGKg1qS4C0Ah6Bhxir+L447UW7K3eWLr8FAcwJ8CHGKXBMgDaP1w99/crXqS3BUY/APXAL3BDykPPk3Im6Pjkrc9WC4KRT4CNwDlzE/bN47IA6rCGCEmkAW4KDHoAl8Bv4AfyK+7fx2JrMXSVnTUlr1RHBURfAZ+CSAO6EAEvWrrHAkrVqBdwRqmQRz3kmAJI1bEv8ZBSVFniBtU8oN3HXJfAF+EQAeEj4QWNz1ppQgjckUPLePWntkrJ8lYYlCUspzgnuOSaU3jkB1CWpFLWzhi7trAfqoO4J8HS1aBPsLEOBJe46Ii30ZzHG7Kx5fH9NKEf5pJdHo+Kn/AxeF3doumtGctgBCZxs54wPlhhkQ3oUEkflj0MTCHyq66sqL0O9r4EJtEW21bCGLoEFzTz0t5PSg3axDOWgdpjEXrYtfU8csuR5qSsfnX9NXX/PmhhiDOrKYWcejY/HFuU367zxgFXKo1cubbDyG74HdRqhr7NcOCyTHJZBDssgh2WQwzLIYRnksAxyWAY5LIMclkEOyyCHZZDDMshhGeSwDHJYBjksgxyWQQ7LIIdlkMMyyGEZ5LAMclgGOSyDHJZBDssgh2WQwzLIYRnksAxyWAY5LIMclkEOy6A2WNKRgNq+del8izn3dVZFE+BYIZby6JVLV9NA1TPGoK4cOnMpwdIX6jb+52wrAeP4X/m++bSC07D0QbmxbuXfEFrOZCvXTjF0Kfwn6V9+nseG+rgCAaavBWLC1fVVFdvo9E0FlLTJ6k516dcba7+h5PFIyk2gaWAVQFuPtAYlMw/kxnfUW2U3jLuTdUnI544E7ikeLzmsUYY5rBWhJXZJvfl6zbg7WaVH+ieh635JyFMc1nAXlBd4aecXV92SwEBqlX0L3fe/gO+kEQXirkbnPbSX4ZYA5YHwG9iLx6X5+i3OdbghzXMQWLUyzMerTAnJ62by9zIxRNYvvXa9VNdXrw4rOUvsuiYlL7V+z9ufRSOTQmrrFdA6EmrK+51yVBzaA+1fd8Rdsi9r2Ir3Mz+rIZ/M1vyq8wL0m8xWO+gz/2ryaZKy86/TJHfJ55S6duoPpB8K5VDMD2sAAAAASUVORK5CYII="
                                />
                                <rect x="372.79" y="219.38" width="56" height="56" rx="3.5" />

                                
                                <path
                                    className='iconLines'
                                    d="M389.93 255.31a3.74 3.74 0 013.73-3.74 3.74 3.74 0 013.74 3.74v1.49h-7.47z"
                                />
                                <path
                                    className='iconLines'
                                    d="M396.27 241.33h-7.64a1.84 1.84 0 00-1.84 1.84V255a1.84 1.84 0 001.84 1.84h22.11a1.84 1.84 0 001.84-1.84v-11.83a1.84 1.84 0 00-1.84-1.84h-7.63"
                                />
                                <path
                                    className='iconLines'
                                    d="M400.64 246.42h8.43M400.64 249.94h3.29M407.53 249.94h1.54"
                                />
                                <circle
                                    className='iconLines'
                                    cx="393.66"
                                    cy="248.21"
                                    r="3.37"
                                />
                                <path
                                    className='iconLines'
                                    d="M394.78 238h9.82v2.46l-4.91 3.07-4.91-3.07z"
                                />
                            </g>

                            {/* Authorize */}
                            <g
                                className={activeExampleIndex === 0 ? "" : " inactive authorize"}
                            >
                                <path className='spacer' d="M252.67 324.28h68.6v66.62h-68.6z" />
                                <image
                                    className='dropShadow'
                                    width="75"
                                    height="75"
                                    transform="translate(249.32 322.91)"
                                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAYAAAA4TnrqAAAACXBIWXMAAAsSAAALEgHS3X78AAAEVElEQVR4Xu2cW1LbQBBFj41tHnmQBCpZQhaX9bA4FpEnYDvGRvmYaaY1Glnq/EQT+lZ1SbZkQR9uj+RUumdN0+Aap8XQCX2aff4yGzpnqmpub/7KIbMxzsrA9O3XIp3w8/4YgEdhRUg6KLyuUY2K1utj0IqwlJPmBCjzQmh4tUjDeSqEvF90WgdW5qYTFYsY8lqATb0s87ITIIcY+xgHFUWX9S3wAmoBrFScAssYGpj+3NSUwxJQjzF+AzsVkIC11HJWdNWcBOoUOAMuYpzH16ckl+XApioNak+AtAU2wDrGNr4vTnvS7sqdpctvRQDzGngb4w3wigBtGT8/9fUrX6f2BEdtgAfgDvhFyEPOk3Nn6vPJWZmrVgQnvQHeAe+Bq7h/GY+d0YY1RVAiDWBPcNAa+An8AL4C3+P+XTy2I3NXyVlz0lp1QXDUFfARuCaAe02AJWtXLbBkrdoC94QqWcVzDgRAsobtiXdGUWmBF1inhHITd10Dn4APBIDnhB9Um7N2hBL8RQIl7z2Q1i4py2dpWJKwlOKS4J5XhNJ7TwB1TSpF7aypSztrTRvUAwGerhZtgqNlKLDEXRekhf4yRs3OWsb3d4RylDu9PBoV7/ILeF7coeuuBclhZyRwsl1SHywxyCPpUUgclT8OzSDwaW5vmrwM9b4GJtBW2VbDmroEFnTz0N9OSg/axTKUg9phEifZtvQ9ccqS56WhfHT+LQ39e9bMEDVoKIejeXRujz3KLzZ44QmrlMeoXPpg5Rd8CRo0wlhnuXBYJjksgxyWQQ7LIIdlkMMyyGEZ5LAMclgGOSyDHJZBDssgh2WQwzLIYRnksAxyWAY5LIMclkEOyyCHZZDDMshhGeSwDHJYBjksgxyWQQ7LIIdlkMMyyGEZ5LAMclgGOSyDHJZBfbCkIwG1ffEa66yGLsBaIfb97oO5DTUNNCOjBuW/aymHo7mUYOkL6Db+Q7aVgDr+r3yeTz6iYPCPrmHl1HXztfQV79RWPjvH0KXwjyS5PZG67vcqZESBBteBtwBobm+a2EanHSWgpE1Wd6pLv15N/YaQYG1ibEkjCjS43DhAtww1KJl5IIDuabfKPlJfJ6s0lG8IjeP3hC7WDSHXR9rLTANQaijPXSWOeiB0qevm6x11dbJCG5Y0lOcd9xpYpxRLC7xcUFx1RwIDqVW2pu57aMOSvmgZUyDANrQ771vA+spQLrgmlN5JPC4/pLa5DpASl5EEYoQfwDdCnuKuzpgCULDiIq/LUGDJg+uB1OJf08QQSO4QWFI5a9LEEIGlndUCVnKWpi/JP5FcVfMsGkiVk9/A1qQylEWe3lk00V25/QSe/CVqm3IE3UcBea6SZ0Y96UjfEQcXeEgXlH1Zw7bUNz8LurD0ctP7cJrPz3ppk9mgXY4CrfP1Z9RkttbB/3fmHySHaXjQAwoGYD2f9H9Nk4RuWYadgYmSo2CVVPOcUhgGU9Jfw3qJ+gOPxgR0lfraPQAAAABJRU5ErkJggg=="
                                />
                                <rect
                                    className='iconBg'
                                    x="259.55"
                                    y="330.14"
                                    width="55"
                                    height="55"
                                    rx="3"
                                />

                                <path
                                    className='iconLines'
                                    d="M280 365.09a2.5 2.5 0 012.5-2.5H296"
                                />
                                <path
                                    className='iconLines'
                                    d="M282.46 347.59H296v20h-13.5a2.5 2.5 0 01-2.5-2.5v-15a2.5 2.5 0 012.46-2.5zM278.13 352.47h4.71M278.13 356.47h4.71"
                                />
                            </g>

                            {/* Access */}
                            <g
                                className={activeExampleIndex <= 1 ? " " : "inactive access"}
                            >
                                <path className='spacer' d="M140.24 213.11h68.6v66.62h-68.6z" />
                                <image
                                    className='dropShadow'
                                    width="75"
                                    height="75"
                                    transform="translate(137.32 212.91)"
                                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAYAAAA4TnrqAAAACXBIWXMAAAsSAAALEgHS3X78AAAEWklEQVR4Xu2cW1LjSBBFj93G0PRrepqYWQKLYz0sjj3Mo7sxxg9szUdWulLlElbOl6vJG5FRkmwJ5+FmSSbImnRdR2icZqfeMKTJ7d3k1HvOWd3DvdslkzHOKsAMbbckm/Rh+xTAV2ElSDao7LeqzgTAXo8PQavCMk6aIlCmlbDwWpKF06WxjCqwI1iFm96ZmKXQfQXWQlmWZaeQdsCLiV2KPbAvgQ1N8ApqBsxNXAIXKSwwe945qoSlULbABlincZOOvQDd5PauN4/1YCVXTcmgLoEr4DrF+7R/SXZZCexcZcvvBYGyBp6BZYqpea+6rw6LfvnNETAfgc8pPgEfEGgX6fwW5q/OjFp6awTQI/ATyRlyee6B/eT2bqLuOsAyc5U6a4646TPwFfgG/AZ8Scev6MM6V1AqdcsOKbdnBNR35BcPuTS3aXuaRqDurCl5rlJY34A/gBsE3EcEls5drcDSEtwATwioeXpdy3KVxm15gdoEr7AukXL7hDjqBvgT+B0B+B75QS05S2GtgAWSIwi8ZTo257hi+mVoXtAyvEDc8wEpva8IqBtyKVpnnbssrGcyqDUC6Zp8t69Wy1AZKix11zV5ov+SoiVn2TvhljxHrck3LAuq9+Ctk/xMd9LJpbtmZIddkcHpeEF7sNQgWyQnfYa0D902l8EytNsWmEKbF6OFde7SMgQpxRl9QOW3kqOcahO8fbP9LviuGGvfE89Z6q7ys4+ujFN/z5o4ogWV1VN+/lfzmDJOtYu2AqjU0Gc/mdsQrNG035LGOitEwHIpYDkUsBwKWA4FLIcClkMBy6GA5VDAcihgORSwHApYDgUshwKWQwHLoYDlUMByKGA5FLAcClgOBSyHApZDAcuhgOVQwHIoYDkUsBwKWA4FLIcClkMBy6GA5VDAcihgORSwHBqCpe1mmPFXl823mvNYZ3UcA2wVYi2PUbmcahroRkYLOpXDyVxqsOyJtn1/V4wa0Mb/yo/NZxCchWVf1AvbVn7tVNdRz51y/h0X9pdf5qHd9rpUQa+J3G7PALqH+y610dmLKqgt0vm5Ineqa79eS/2Gmpf2Ry/TqLkpNAusAzhqKDcXVVBlK/8C6VK3PcWtdbJqXkvgB5LPggxOe6NrDjsqwxLWCmm8/oF0fCqoDe11spbO+gn8A/yL5PdEdtiRu6A+wWsfsbrqkQwG5IctaKv7XpO2JlggoP5CuvAfye56Id+8DhoqQ23nX9JfIEJb/Ftb18E6S7vvtRS/A38jeS6RHBVWrwx7C/dMbu+mSPK2mbz1FUM6MyqsLeKiJ/KKITp/2blr3z3cHxxWc5badUNOXmv9ibbXorF3eV3wwq5Fs0Ly3FHMV8DgklBTfp1VjmyC5Q1M7/gbE4fHh7FLQqm7dFvnsBXtrZ9VwrLA7EP3zkTfQUlvbWW2cv4qQ49X1/97q2v+dSZ6+68tkvgWV5Msy1I2RizFOQpWTS2vUzoGTE3/G9Zb1H9jnvZy1NR71wAAAABJRU5ErkJggg=="
                                />
                                <rect
                                    className='iconBg'
                                    x="147.53"
                                    y="219.88"
                                    width="55"
                                    height="55"
                                    rx="3"
                                />
                                <path
                                    className='vaultIcon'
                                    d="M162.45 234.8L175 260l12.63-25.16zm14 5h1.46v1.45h-1.46zm-2.9 5.83h-1.46v-1.46h1.46zm0-2.19h-1.46V242h1.46zm0-2.19h-1.46v-1.45h1.46zm2.19 6.57h-1.44v-1.46h1.46zm0-2.19h-1.44v-1.46h1.46zm0-2.19h-1.44V242h1.46zm0-2.19h-1.44v-1.45h1.46zm.71.73h1.46v1.46h-1.46zm0 3.65v-1.46H178v1.46z"
                                />
                                <image
                                    className='dropShadow'
                                    width="75"
                                    height="75"
                                    transform="translate(249.32 101.91)"
                                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAYAAAA4TnrqAAAACXBIWXMAAAsSAAALEgHS3X78AAAErklEQVR4Xu2c63LbNhCFPymy5PiSNI2nfQQ/nJ/HD+d3aJvGSazoYrE/gEMsIVDiTv6QNc7MDkhdaOHzWYDyeHfWNA1Vw7Q494I+ze4fZudeM2Y1T49ul8yGOCsD03c8JdlJt8fnAJ6EFSHZoHA+VTUmAA56vA9aEZZx0pwAZV4IC29KsnCaOOZRBHYEK3PTOxOLGDoXsCmkZZ52gvQK7E28xjgAhxxY3wIvUAtgaWIFXMSwwOz7xqgclqDsgC2wieM2PrYHmtn9Q2cd68CKrpqTQK2AS+Aqxvt4viK5LAc2Vtn02xOgbIA18BJjbl4r95Vh0U2/JQHMDfAhxi1wTYB2Ed8/hfWrMaNSb0MA9A14JswZUnoegMPs/mEmd7WwzFolZy0JbvoAfAI+A78BH+Pjl3RhjRWUJLe8EtJtTQD1L+EXDyk1d/F4Hkeg7Kw5aa0SrM/AH8AdAdwNAZbWrqnAUgpugR8EUMv4vNLyZxx3+QVKC7xgrQjpdktw1B3wJ/A7AeB7wg+akrME6yfwnTBHCPBe4mNLjjOmm4bmCaXhBcE914TU+0QAdUdKReusscvCWpNAbQiQrki7fTFb+tJQsOSuK9JC/zHGlJxld8IdaY3akDYsC6pz461FfqGT+ObcXQuSwy5J4DReMD1YMsiOMCfdQ9qbbjuX3jS0xxaYoC2z0cIau5SGEFJxQRdQ/q3kaE6lBd6+2H4XfJeNpe+JY5bclX/2wZlx7u9ZM0dMQXn25J//5DzmDFPpolMBlKvvs5+dWx+swbTfkoY6q4oKy6UKy6EKy6EKy6EKy6EKy6EKy6EKy6EKy6EKy6EKy6EKy6EKy6EKy6EKy6EKy6EKy6EKy6EKy6EKy6EKy6EKy6EKy6EKy6EKy6EKy6EKy6EKy6EKy6EKy6EKy6EKy6EKy6EKy6E+WKqgwoxvXh5n5QD/bxDPzu0crNIFpg6p9EsfNLdTRQO6SFuRbo4PHP+gsavJIp/D2XlYWCXaKrwuVair0hOm8b/ydj6lOGuCBUDz9NjEyjBL3Vaoq8rTVqoL9IFxFxhYE9j5bE3kRrCg2uM8Da2jVB6rCvU1oVT2mlQquycVPsE0YKlqVbGmW+orl7XuOiooN5Kr5CaVwz7TBbUlFDROoV2BNYFgfSXM6RthfmvCfOWwTpsCOF6zlIJy1Tpe6CuhGNOCEjjVE8M4gWnCMoFgPQN/A1/i8Q+Cw7YU3AXlNNRFbd8DVdpDqlxXqeyCcZfS2QVbzS/UpuAL8BcJ2AvJXSrkbNUHyzrLNojYES54Q38jjDHKmmBHqr5/JrQr+IcESwu+dsdWncY9pr2K+jqo+l7F5LfxOK9Utze3Y4Jm1xzBUrcQbVjqGPI9hhb7PXBonh5bYKUF3m6xmriq1mXfFQGmaovHmoJSvh7bhhfaEbUr5mtWq1MtoQRChePqcqRiclupbkGNCVp+v2Rvi7TU2FCHowMct4Q61WxMKSloi2zsu2UYKyyday2y0I7u5Ac1G2uf6DYdmxdizDtgn+zOeMhCj/na2LVPHjfHsHCmBkpqzJjHySaJv9pNsnQ+ZpXSMhwMaMU5CFafptirdAiUPv0SrLem/wD+zwF/YqGwSwAAAABJRU5ErkJggg=="
                                />
                            </g>
                        </g>
                    </g>
                </svg>
            </div>
        </Howitworks>
    );
}