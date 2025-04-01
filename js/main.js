var app = new Vue({
    el: "#all-pears",
    data:{
        products:[
            {id:1,title:"Bartlett",short_text:"Medium-sized Yellow Bell-Shaped Pear",image:'image/img/bartlett pear.png',
            desc:{
                plant:{p1:"Vigorous tree with good canopy development.",
                      p2:"Consistent and high yielding with good fruit set.",
                      p3:"Early to mid-season maturity."},
                fruit:{f1:"Good storage life on the tree and post-harvest.",
                      f2:"Attractive smooth skin with a bright yellow color, sometimes with a red blush.",
                      f3:"Average fruit size: 6-8 cm in diameter, 8-10 cm long."},
                cycle:{c1:"Spring",c2:"Autumn"},
                color:"Yellow"
            }},
            {id:2,title:"Bosc",short_text:"Medium-sized Russeted Elongated Pear",image:'image/img/BoscPears.jpg',
            desc:{
                plant:{p1:"Moderately vigorous tree with upright growth.",
                      p2:"Good productivity with regular bearing.",
                      p3:"Mid to late-season maturity."},
                fruit:{f1:"Good post-harvest storage potential.",
                      f2:"Distinctive elongated shape with a russeted brown skin.",
                      f3:"Average fruit size: 5-7 cm in diameter, 10-13 cm long."},
                cycle:{c1:"Spring",c2:"Autumn"},
                color:"Brown"
            }},
            {id:3,title:"Anjou",short_text:"Medium-sized Green Oval Pear",image:'image/img/Anjou Pears.jpg',
            desc:{
                plant:{p1:"Vigorous and spreading tree.",
                      p2:"High and consistent yields.",
                      p3:"Late-season maturity."},
                fruit:{f1:"Excellent post-harvest storage life.",
                      f2:"Smooth, green skin that may develop a slight yellow hue when ripe.",
                      f3:"Average fruit size: 6-8 cm in diameter, 9-11 cm long."},
                cycle:{c1:"Spring",c2:"Autumn"},
                color:"Green"
            }},
            {id:4,title:"Comice",short_text:"Large-sized Green Round Pear",image:'image/img/comice pear.jpg',
            desc:{
                plant:{p1:"Moderately vigorous, somewhat drooping growth habit.",
                      p2:"Moderate to good productivity, benefits from cross-pollination.",
                      p3:"Mid to late-season maturity."},
                fruit:{f1:"Moderate storage life, best enjoyed when fully ripe.",
                      f2:"Roundish shape with a green skin that may develop a red blush.",
                      f3:"Average fruit size: 7-9 cm in diameter, 8-10 cm long."},
                cycle:{c1:"Spring",c2:"Autumn"},
                color:"Green"
            }},
            {id:5,title:"Asian Pear (Nashi)",short_text:"Medium-sized Golden-Brown Round Pear",image:'image/img/Nashi Pears.jpg',
            desc:{
                plant:{p1:"Vigorous and upright growing tree.",
                      p2:"High and regular yields.",
                      p3:"Early to mid-season maturity."},
                fruit:{f1:"Good shelf life on the tree and moderate post-harvest.",
                      f2:"Round shape with a crisp texture and golden-brown skin.",
                      f3:"Average fruit size: 5-7 cm in diameter."},
                cycle:{c1:"Spring",c2:"Summer"},
                color:"Golden-Brown"
            }}
        ],
        product:[],
        cart:[],
        contactFields:[{
            name: "",
            companyName: "",
            position: "",
            city: "",
            country: "",
            telephone: "",
            email: "",
            youAre: "",
            otherSpecify: "",
            interested: "",
            capcha: ""
        }],
        btnVisible: 0,
        cartVisible:0,
        formSubmitted: false,
        formVisible: 1
    },
    mounted:function(){
        this.getProduct();
        this.checkInCart();
        this.getCart();
    },
    methods:{
        getProduct:function(){
            if(window.location.hash){
                var id = window.location.hash.replace('#','');
                if(this.products && this.products.length>0){
                    for(i in this.products){
                        if(this.products[i] && this.products[i].id && id==this.products[i].id) this.product=this.products[i];
                    }
                }
            }
        },
        checkInCart: function(){
            // Placeholder for checking if the current product is in the cart
            // This would likely involve iterating through the 'cart' array
            console.log("Checking if product is in cart");
        },
        getCart: function(){
            // Placeholder for fetching the cart data
            // This might involve an API call or retrieving data from local storage
            console.log("Fetching cart data");
        }
    }
});