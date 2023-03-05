
const SplitScreen = ({children})=>{
console.log(children)
const [left,right] = children
return(
<div style={{display:"flex"}}>
<div style={{flex:1}}>
    {left}
</div>
<div style={{flex:1}}>
   {right}
</div>

</div>
)


}

export default SplitScreen