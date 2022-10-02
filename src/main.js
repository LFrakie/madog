function dgen() {
    // Get data
        let gnamedoc = document.getElementById("dnamedoc").value;
        let gpswd = document.getElementById("dpswd").value;

// insert template
        let preContent = `<!DOCTYPE html> 
         <html>
             <header>
                 <meta charset='UTF-8'>
                 <title>${gnamedoc}.pdf</title>
                 <link rel='icon' type='image/png' href='https://cdn4.iconfinder.com/data/icons/free-colorful-icons/360/google_docs.png'>

             </header>
                 <body style='margin:0px;padding:0px;overflow:hidden'>
                
                     <iframe src='https://lfvdoc.github.io/${gnamedoc}'
                     style='width: 100%; height: 1000px; border: 0;'>
                     </iframe>
                 </body>
         </html>`

// mak download
    // alert("funciona "+preContent)

    const a = document.createElement("a");
    const archivo = new Blob([preContent], { type: 'text/html' }); // <-- insert preContent
    const url = URL.createObjectURL(archivo);
    a.href = url;
    a.download = gnamedoc;
    a.click();
    URL.revokeObjectURL(url);

}




















var content = `<!DOCTYPE html> 
 <html>
     <header>
         <meta charset='UTF-8'>
         <title>{{ second_post.title }}.pdf</title>
         <link rel='icon' type='image/png' href='https://cdn4.iconfinder.com/data/icons/free-colorful-icons/360/google_docs.png'>

     </header>
         <body style='margin:0px;padding:0px;overflow:hidden'>
        
             <iframe src='https://lfvdoc.github.io/{{ second_post.title }}'
             style='width: 100%; height: 1000px; border: 0;'>
             </iframe>
         </body>
 </html>`

console.log(content);





var getdata = () => {
    let gpswd = document.getElementById("dpswd").value;
        let gnamedoc = document.getElementById("dnamedoc").value;
        
//          alert(gpswd+" & "+gnamedoc);
            
        }

var guardarArchivoDeTexto = (contenido, nombre) => {
    const a = document.createElement("a");
    const archivo = new Blob([contenido], { type: 'text/html' });
    const url = URL.createObjectURL(archivo);
    a.href = url;
    a.download = nombre;
    a.click();
    URL.revokeObjectURL(url);
}