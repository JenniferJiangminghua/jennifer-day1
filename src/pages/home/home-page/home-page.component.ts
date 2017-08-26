import { Component, OnInit } from '@angular/core';

interface Cookbook{
  creatdate:number,
  cookingname:string,
  material:string,
  condiment:string,
  cooktime:number,
  units:string
  
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  cookbook:Array<Cookbook>;
  
  constructor() {
   this.getCookbook()
  }
  
  getCookbook(){
     this.cookbook = [
      {creatdate:20150901,cookingname:"秘制红烧牛肉面",material:"面条和牛肉",condiment:"小葱和青菜",cooktime:30,units:"分钟"},
      {creatdate:20160101,cookingname:"玉子烧",material:"鸡蛋和牛奶",condiment:"糖",cooktime:15,units:"分钟"},
      {creatdate:20170620,cookingname:"椰蓉鲜奶冻",material:"淀粉和牛奶",condiment:"椰蓉和白糖",cooktime:100,units:"分钟"},
      {creatdate:20170430,cookingname:"土豆沙拉",material:"土豆",condiment:"火腿",cooktime:100,units:"分钟"}
      
    ]
  }

  /*
  addContact(){
    let newContact = {
      name:"Rita",
      sex:"F",
      mobile:"13677777777"
    }
    this.contacts.push(newContact)
  }
  */

  asc(){
    // 正序排列
    // 数组操作API，https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
    this.cookbook.sort((a,b)=>{
      if(a.creatdate>b.creatdate){
        return 1
      }else{
        return -1
      }
    })
}


  desc(){
    // 逆序排列 
    this.cookbook.sort((a,b)=>{

      if(a.creatdate<b.creatdate){
        return 1
      }else{
        return -1
      }


    })   
  }

  random(){
    // 随机排列
    // 常用数学计算API，https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
    this.cookbook.sort((a,b)=>{
    return Math.random()-0.5

  })
  }
  ngOnInit() {
  }

}
