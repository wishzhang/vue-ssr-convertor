const {setFilepath} = require('./build/utils');
const server = require('express')();
const { createBundleRenderer } = require('vue-server-renderer');

const templatePath = setFilepath('./src/index.template.html');
const bundle = require('./dist/vue-ssr-server-bundle.json');
const clientManifest = require('./dist/vue-ssr-client-manifest.json');
let renderer=null;
let readyPromise=null;

const isProd=process.env.NODE_ENV==='production';

if(isProd){
    const template = require('fs').readFileSync(templatePath, 'utf-8');
    renderer = createBundleRenderer(bundle, {
        runInNewContext: false,
        template,
        clientManifest
    });
}else{
    readyPromise = require('./build/setup-dev-server')(
        server,
        templatePath,
        (bundle, options) => {
            renderer = createBundleRenderer(bundle, options)
        }
    )
}


function render(req,res){
    res.setHeader('Content-Type','text/html');
    const context={
        url:req.url
    };
    renderer.renderToString(context).then(html => {
        res.end(`
            ${html}
       `);
    }).catch(err => {
        console.log(err);
    });
}

console.log(isProd);
server.get('*', isProd?render:(req,res)=>{
    readyPromise.then(()=>render(req,res));
});


server.listen(8081,()=>{
    console.log('listening port 8080')
});

