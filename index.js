const { Telegraf } = require('telegraf');
require('dotenv').config();
console.log(process.env);
const bot=new Telegraf(process.env.BOT_TOKEN);

const binarySearchString=`
const binarySearch=function search(arr,x){
    let lo=0,hi=arr.length-1;
    while(lo<=hi){
        let mid=l0+Math.floor((hi-lo)/2);
        if(arr[mid]==x)
        return mid;
        else if(arr[mid]<x){
            lo=mid+1;
        }else{
            hi=mid-1;
        }
    }
    return undefined;
}`;

try{
  bot.start((ctx) => ctx.reply('Welcome to Prachi\'s Dsa bot')); //  /start
//bot.command for custom commands
  bot.command('binarysearch', (ctx) => ctx.reply(binarySearchString));//  /binarysearch

  bot.on('sticker', (ctx) => ctx.reply('👍'));
  
  bot.on('text', (ctx) => {
    console.log(ctx.update.message);
    ctx.reply('i don\'t understand humans');
  });

   bot.launch();
}catch{
    console.log("unexpected commond");
}