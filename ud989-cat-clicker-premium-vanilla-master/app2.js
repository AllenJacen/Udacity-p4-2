var model={
  currentCar:null,
  cats:[{
        name:'th',
        imgUrl:'./img/22252709_010df3379e_z.jpg',
        count:0
        },{
        name:'kk',
        imgUrl:'./img/434164568_fea0ad4013_z.jpg',
        count:0
        },{
        name:'xx',
        imgUrl:'./img/1413379559_412a540d29_z.jpg',
        count:0
        },{
        name:'ss',
        imgUrl:'./img/4154543904_6e2428c421_z.jpg',
        count:0
        },{
        name:'gg',
        imgUrl:'./img/9648464288_2516b35537_z.jpg',
        count:0
        }
    ]
};

var octopus = {
    init:function(){
        model.currentCar=model.cats[0];
        
        catListView.init();
        catView.init();
    },
    getCurrentCat:function(){
        return model.currentCar;
    },
    getCats:function(){
        return model.cats
    },
    setCurrentCat:function(cat){
        model.currentCar=cat;
    },
    addCatcount:function(){
        model.currentCar.count++;

        catView.render();
    }   
};

var catView={
    init:function(){
        this.oCat=document.getElementById('cat');
        this.oCatname=document.getElementById('cat-name');
        this.oCatcount=document.getElementById('cat-count');
        this.oCatimg=document.getElementById('cat-img');
        this.oCatimg.addEventListener('click',function(){
            octopus.addCatcount();
        })

        this.render();
        },

    render:function(){
        var currentCat=octopus.getCurrentCat();
        this.oCatname.innerHTML=currentCat.name;
        this.oCatcount.innerHTML=currentCat.count;
        this.oCatimg.src=currentCat.imgUrl;
        }

};

var catListView={
    init:function(){
        this.oCatList = document.getElementById('cat-list');
        this.render();
        },
        render:function(){
        var cats=octopus.getCats();
        var oli;

        this.oCatList.innerHTML='';

        for(var i=0;i<cats.length;i++){
            oli=document.createElement('li');
            oli.innerHTML=cats[i].name;

            oli.addEventListener('click',(function(a){
                return function(){
                    octopus.setCurrentCat(a);
                    catView.render();
                }
            })(cats[i]))

            this.oCatList.appendChild(oli);
    
        }    
         
        }
        
};


var adminView={
    init:function () {

    },
    render:function () {

    },
    admin:function () {

    },
    cancel:function () {

    },
    save:function () {

    }
};

octopus.init();