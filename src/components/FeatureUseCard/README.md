### What is the use of this CTA:
The **FeatureUseCard** component to show a simple feature card or list of feature cards
### How to use the CTA:
To use this CTA :
```
const featureCardData = [
    {
      image: "../assets/images/AWS-Diagram/aws-light.svg",
      heading: "Responsive Design",
      subtitle:
        "Our app provides a seamless experience on all devices, ensuring accessibility for users on various screen sizes.",
    },
    {
      image: "../assets/images/AWS-Diagram/aws-light.svg",
      heading: "User-Friendly Interface",
      subtitle:
        "Intuitive and user-friendly interface to enhance the overall user experience. Get started with ease!",
    },
    {
      image: "../assets/images/AWS-Diagram/aws-light.svg",
      heading: "Advanced Features",
      subtitle:
        "Explore a range of advanced features that empower you to do more. From customization to automation, we’ve got you covered.",
    },
  ];
```
```
{featureCardData.map((feature) => (
        <FeatureUseCard key={feature.heading} data={feature} sm={12} md={6} lg={6} />
      ))}
```
