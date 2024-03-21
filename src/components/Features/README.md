### What is the use of this CTA:
The **Feature** component to show a feature with an customizable image/gif, title, description and the Learn More link
### How to use the CTA:
To use this CTA :
```
let title = "Collaborate with Precision";
  let show_custom_cursor = true;
  let animationOne = true;
  let redirectLink = "/comments";
  let desc =
    "Real-time collaboration for cloud and cloud native designs with live-editing, instant feedback, deploy dry runs, and secure access controls.";
  let imgLink = "../a";
  let cursor = false;
```
```
<Features
        key={title}
        title={title}
        show_custom_cursor={show_custom_cursor}
        animationOne={animationOne}
        redirectLink={redirectLink}
        desc={desc}
        imgLink={imgLink}
        cursor={cursor}
        redirectLinkWithImage={redirectLink}
      />
```

![image](https://github.com/layer5io/docs/assets/74408634/fa6da8c2-5af3-4d5a-9738-fd505790bd71)