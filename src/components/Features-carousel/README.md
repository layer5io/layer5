### What is the use of this CTA:
The **Features-carousel** component creates a carousel of Features card
### How to use the CTA:
To use this CTA :
```
 const featuresData = [
    {
      id: 1,
      title: "Responsive Design",
      description:
        "Our app provides a seamless experience on all devices, ensuring accessibility for users on various screen sizes.",
      learnMoreLink: "/responsive-design",
      content: (
        <img src="/images/responsive-design.png" alt="Responsive Design" />
      ),
    },
    {
      id: 2,
      title: "User-Friendly Interface",
      description:
        "Intuitive and user-friendly interface to enhance the overall user experience. Get started with ease!",
      learnMoreLink: "/user-friendly-interface",
      content: (
        <img
          src="/images/user-friendly-interface.png"
          alt="User-Friendly Interface"
        />
      ),
    },
    {
      id: 3,
      title: "Advanced Features",
      description:
        "Explore a range of advanced features that empower you to do more. From customization to automation, we’ve got you covered.",
      learnMoreLink: "/advanced-features",
      content: (
        <img src="/images/advanced-features.png" alt="Advanced Features" />
      ),
    },
  ];
```
```
<Features features={featuresData} heading="Optional Heading" />
```

![image](https://github.com/layer5io/docs/assets/74408634/90314c89-6cc0-4170-94ae-81c602f74894)

![image](https://github.com/layer5io/docs/assets/74408634/7553c18e-8719-4bda-aa82-92eb111b99fb)

