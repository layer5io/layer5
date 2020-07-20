
import imgPricing1 from '../../images/app/pricing/01.png';
import imgPricing2 from '../../images/app/pricing/02.png';
import imgPricing3 from '../../images/app/pricing/03.png';

const data = {
    pricings: [
      {
        thumb: imgPricing1,
        name: 'Basic Plan',
        price: '$50.25',
        description: 'Lorem ipsum dolor sit amet consectetur elit, sed.',
        link: '#',
        btnText: 'Get Package',
        services:[
            {
                content: 'Push Notification.',
                className: '--on'
            },
            {
                content: 'Offline Synchronization.',
                className: '--on'
            },
            {
                content: 'SQL Database.',
                className: '--on'
            },
            {
                content: 'Speech & Text Analytics.',
                className: '--off'
            },
            {
                content: '24/7 Supports.',
                className: '--off'
            }
        ]
      },{
        thumb: imgPricing2,
        name: 'Standard Plan',
        price: '$75.00',
        description: 'Lorem ipsum dolor sit amet consectetur elit, sed.',
        link: '#',
        btnText: 'Get Package',
        services:[
            {
                content: 'Push Notification.',
                className: '--on'
            },
            {
                content: 'Offline Synchronization.',
                className: '--on'
            },
            {
                content: 'SQL Database.',
                className: '--on'
            },
            {
                content: 'Speech & Text Analytics.',
                className: '--on'
            },
            {
                content: '24/7 Supports.',
                className: '--off'
            }
        ]
      },
      {
        thumb: imgPricing3,
        name: 'Premium Plan',
        price: '$99.99',
        description: 'Lorem ipsum dolor sit amet consectetur elit, sed.',
        link: '#',
        btnText: 'Get Package',
        services:[
            {
                content: 'Push Notification.',
                className: '--on'
            },
            {
                content: 'Offline Synchronization.',
                className: '--on'
            },
            {
                content: 'SQL Database.',
                className: '--on'
            },
            {
                content: 'Speech & Text Analytics.',
                className: '--on'
            },
            {
                content: '24/7 Supports.',
                className: '--on'
            }
        ]
      }
      
    ]
    
  };
  export default data;
