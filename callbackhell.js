

function user1(id,cb){
    setTimeout(()=>{
        cb({id:id,name:'chhaya'})
    },5000)}
function user2(id,cb){
    setTimeout(()=>{
        cb({id:id,name:'saloni'})
    },4000)}
function user3(id,cb){
    setTimeout(()=>{
    cb({id:id,name:'sanjna'})
    },3000)}
function user4(id,cb){
    setTimeout(()=>{
    cb({id:id,name:'nikita'})
    },2000)}
function user5(id,cb){
    setTimeout(()=>{
    cb({id:id,name:'karuna'})
    },1000)}
            
user1(1,(userdetail1)=>{console.log('user1 details',userdetail1);
    user2(2,(userdetail2)=>{
        console.log('user1 details',userdetail2);
        user3(3,(userdetail3)=>{
        console.log('user1 details',userdetail3);
            user4(4,(userdetail4)=>{
                console.log('user1 details',userdetail4);
                user5(5,(userdetail5)=>{
                    console.log('user1 details',userdetail5);
                })
            })
        
        })
    
    })
})