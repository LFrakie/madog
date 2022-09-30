function funtest() {
    alert(content)
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
