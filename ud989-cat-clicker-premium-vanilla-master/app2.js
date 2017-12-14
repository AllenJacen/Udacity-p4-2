var model={
  currentCar:null,
  currentCarIndex:0,
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
    ],
  adminShow:false
};

var octopus = {
    init:function(){
        model.currentCar=model.cats[0];
        
        catListView.init();
        catView.init();
        adminView.init();
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
    },
    setCarIndex:function (i) {
      model.currentCarIndex=i;
    },
    showAdmin:function (a) {
        model.adminShow=true;
        this.makedecide(a);
    },
    hidenAdmin:function (a) {
        model.adminShow=false;
        this.makedecide(a);
    },
    makedecide:function (a) {
        if(model.adminShow == true){
            a.style.display='block';
        }else{
            a.style.display='none';
        }
    },
    reviseCatlist:function (a) {
        model.cats[model.currentCarIndex].name=a[0];
        model.cats[model.currentCarIndex].imgUrl=a[1];
        model.cats[model.currentCarIndex].count=a[2];
        model.currentCar=model.cats[model.currentCarIndex];
        catListView.init();
        catView.init();
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

            oli.addEventListener('click',(function(a,i){
                return function(){
                    octopus.setCurrentCat(a);
                    octopus.setCarIndex(i);
                    catView.render();
                }
            })(cats[i],i))

            this.oCatList.appendChild(oli);
    
        }    
         
        }
        
};


var adminView={
    init:function () {
        this.oMain=document.getElementById('admin-list');
        this.oadmin=document.getElementById('admin');
        this.oName=document.getElementById('admin-name');
        this.oUrl=document.getElementById('admin-url');
        this.oNum=document.getElementById('admin-num');
        this.oCancel=document.getElementById('cancel');
        this.oSave=document.getElementById('save');
        this.render();
    },
    render:function () {
        octopus.hidenAdmin(this.oMain);
        this.oadmin.addEventListener('click',()=>{
            // console.log(this);
            // console.log(this.oMain);
            octopus.showAdmin(this.oMain);
        });
        this.oCancel.addEventListener('click',()=>{
            octopus.hidenAdmin(this.oMain);
            this.oName.value='';
            this.oUrl.value='';
            this.oNum.value='';
        });
        this.oSave.addEventListener('click',()=>{
            var name=this.oName.value;
            var url=this.oUrl.value;
            var num=this.oNum.value;
            var a=[name,url,num];
            octopus.reviseCatlist(a);
            this.oName.value='';
            this.oUrl.value='';
            this.oNum.value='';
            octopus.hidenAdmin(this.oMain);
        })
    }
    //this指向还有待练习
};

octopus.init();