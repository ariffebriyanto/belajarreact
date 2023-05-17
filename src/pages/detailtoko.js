import { useParams } from "react-router-dom";
function DetailToko() {
//     const url = new URL(window.location.href);
// const yourParamName = url.searchParams.get('idtoko');
let { idtoko,idtoko1 }=useParams();
let toko= idtoko + ' ' + idtoko1;
console.log(idtoko1);
   
    
      return (
        <div className="Toko">
          <header className="App-header">
           
            <p>Belajar hitung{        
           toko
              }</p>
          </header>
        </div>
      );
    }
    
    export default DetailToko;