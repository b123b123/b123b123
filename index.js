const wb = {
    color:"",
    getColor(Type="String",Num=1){
        let random = function(){
            return "#" + Math.round(Math.random() * 0xffffff).toString(16);
        }
        Num = Number(Num);
        if(!Num) Num = 1;
        if(!isNaN(Number(Type))){
            Num = Number(Type);
        }
        Type = Type.toString();
        if(Type.toLowerCase() == "array" || Type.toLowerCase() == "arr"){
            let arr = [];
            for(let i = 1;i <= Num;i ++){
                arr.push(random());
            }
            return arr;
        }else{
            let str = "";
            for(let i = 1;i <= Num;i ++){
                str += random() + ",";
            }
            return str.replace(/,$/,'');
        }
    }
}
export default wb;