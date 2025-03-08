### What is the use of this CTA:
The **CommonForm** component is a used to display a form with fields such as First name, last name, Email, Occupation, Organization / Company / School, What role best identifies you and a Submit button

### How to use the CTA:
To use this CTA simply use
```
<CommonForm
        title="Get the eBook"
        form="epsma-book"
        account_desc="Email the The Enterprise Path to Service Mesh Architectures 2nd Edition"
        submit_title="Your copy of the book will arrive in your mailbox shortly."
        submit_body={
          <span
            dangerouslySetInnerHTML={{
              __html:
                'While waiting for your copy to arrive, take a free <a href="https://layer5.io/learn/learning-paths">learning path</a>.',
            }}
          />
        }
      />
```

![image](https://github.com/layer5io/layer5/assets/74408634/27299307-456f-4764-b309-58b91d578870)