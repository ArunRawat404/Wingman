export const headerItems = [
    {
        id: 1,
        name: "Summary",
        path: "/assets/summary.png",
        href: "#",
        isBg: true
    },
    {
        id: 2,
        name: "Sales",
        path: "/assets/sales.png",
        href: "#",
        isBg: false
    }, {
        id: 3,
        name: "Chats",
        path: "/assets/header_chats.png",
        href: "#",
        isBg: false
    },
];

// sidebarItems.js
export const sidebarItems = [
    {
        id: 1,
        name: "Logo",
        type: "logo",
        path: "./assets/company_logo.png",
        isTop: true,
        isActive: true,
    },
    {
        id: 2,
        name: "Home",
        path: "./assets/home.png",
        isActive: true,
    },
    {
        id: 3,
        name: "Chats",
        path: "./assets/sidebar_chat.png",
        isActive: false,
    },
    {
        id: 4,
        name: "Users",
        path: "./assets/users.png",
        isActive: false,
    },
    {
        id: 5,
        name: "Settings",
        type: "bottom",
        path: "./assets/settings.png",
    },
];


export const cardItems = [
    {
        id: 1,
        title: "CONSULTATIONS",
        value: "24",
        status: "increase",
        statusValue: "15%",
        path: "/assets/consultations.png",
        trendPath: "/assets/up.png"
    },
    {
        id: 2,
        title: "ORDERS PLACED",
        value: "12",
        status: "decrease",
        statusValue: "15%",
        path: "/assets/order.png",
        trendPath: "/assets/down.png"
    },
    {
        id: 3,
        title: "CONVERSION",
        value: "50%",
        status: "decrease",
        statusValue: "15%",
        path: "/assets/conversion.png",
        trendPath: "/assets/down.png"
    },
    {
        id: 4,
        title: "TOTAL SALES VALUE",
        value: "$2,400",
        status: "increase",
        statusValue: "15%",
        path: "/assets/total_sales_value.png",
        trendPath: "/assets/up.png"
    },
    {
        id: 5,
        title: "AVG ORDER VALUE",
        value: "$240",
        status: "increase",
        statusValue: "15%",
        path: "/assets/avg_order_value.png",
        trendPath: "/assets/up.png"
    },
    {
        id: 6,
        title: "COMMISSION PAID",
        value: "$240",
        status: "increase",
        statusValue: "15%",
        path: "/assets/commision_paid.png",
        trendPath: "/assets/up.png"
    },
];

export const mockData = [
    {
        product: {
            image: '/assets/order_pic.png',
            name: 'Product Name...'
        },
        date: '24 Apr \'2024',
        time: '10:24 AM',
        timeSpent: '2h 5m',
        orderValue: '$120,21',
        commission: '$55'
    },
    {
        product: {
            image: '/assets/order_pic.png',
            name: 'Product Name...'
        },
        date: '24 Apr \'2024',
        time: '10:24 AM',
        timeSpent: '2h 5m',
        orderValue: '$120,21',
        commission: '$55'
    },
    {
        product: {
            image: '/assets/order_pic.png',
            name: 'Product Name...'
        },
        date: '24 Apr \'2024',
        time: '10:24 AM',
        timeSpent: '2h 5m',
        orderValue: '$120,21',
        commission: '$55'
    },
    {
        product: {
            image: '/assets/order_pic.png',
            name: 'Product Name...'
        },
        date: '24 Apr \'2024',
        time: '10:24 AM',
        timeSpent: '2h 5m',
        orderValue: '$120,21',
        commission: '$55'
    }
];
