import '../App.css'


export const Pagination = ({ total, selected, onPageChange }) => {
         var  arr=[]

          for (var i=1; i<=total; i++)
          {
             arr.push(i)
          }
      
  return <div className="pageContainer">
     <div>{"<"}</div>
        {arr.map((elem,index)=>{
           return(
             <>
             {(selected)===elem ? (<div style={{   border: "1px solid blue", marginRight: "5px",textalign: "center",padding: "5px",}}>
               {elem}</div>) : (<div style={{  border: "1px solid red",marginRight: "5px",textalign: "center",padding: "5px",}}>{elem}
               </div>)}
             </>
           )
        })}
        <div>{">"}</div>
        
  </div>;

};