<h1>SadhguruJS-Beginners</h1>
<h3>Promoting Yoga while Programming</h3>
<br/>

<div id="divAbout">
<h3>About the Project</h3>
This project is to provide information about inner mechanism of Angular 2 app AND supply a working template to experience it.  If you are new to Webpack, it is going to be a bumpy ride.  Be prepared to do same things differently -- the Webpack and Angular 2 way.
<hr/>
</div>

<div id="divEnvironment">
    <h3>Environment</h3>
    This sample app is developed and tested successfully in the following environment.
    <ul>
        <li>CentOS release 6.6 (Final) (<code>cat /etc/*-release</code>) </li>
        <li>npm v4.1.2 (<code>npm --version</code>)</li>
        <li>node v7.6.0 (<code>node --version</code>)</li>
    </ul>
    <hr/>
</div>
<div id="divSetup">
    <h3>Setup</h3>
    Here are the steps to download and run this app.<br/><br/>
    <ul>
        <li>Check whether Webpack is already installed globally.<br/>
            <code>webpack --version</code><br/>
            If installed, make sure it is v2.3.3 or above. Update it if necessary.<br/>
            <code>npm update webpack -g</code><br/><br/>
        </li>
        <li>Install webpack-dev-server v2.4.2 or above, if not done already<br/>
            <code>npm install webpack-dev-server -g</code><br/><br/>
        </li>
        <li>Download app code from git<br/>
            <code>git clone https://github.com/vasugokaraju/SadhguruJS-Beginners.git</code><br/><br/>
        </li>
        <li>
            Go to the app folder<br/>
            <code>cd SadhguruJS-Beginners</code><br/><br/>
        </li>
        <li>
            Install all dependencies from package.json<br/>
            <code>npm install</code><br/><br/>
        </li>
        <li>
            Run the app<br/>
            <code>npm run serve</code><br/><br/>
        </li>
        <li>
            Open browser and access the following url<br/>
            <code>http://localhost:8080/</code>
        </li>
    </ul>
    <hr/>
</div>
<div id="divIntegratedModules">
    <h3>Integrated Modules</h3>
    <ol>
        <li>Webpack</li>
        <li>Webpack-dev-server</li>
        <li>TypeScript</li>
        <li>Angular 2</li>
        <li>jQuery</li>
        <li>Bootstrap</li>
        <li>Font Awesome</li>
    </ol>
    <hr/>
</div>

<div id="divWhereToStart">
    <h3>Where to start?</h3>
        There are many tools involved in developing an Angular 2 app and you need basic understanding of each tool.  In my opinion, the best place to start is at Webpack.
    <hr/>
</div>


<div id="divWebpack">
<h3>Webpack</h3>
In a nutshell, <a href="https://webpack.js.org/" target="_blank">Webpack</a> is a module bundler.  That means it collects various code files and process them as per the instructions in the configuration file and packs them as single file, where possible.  Let us take an example.  Angular 2 brought a new friend along with it and it is called <a href="https://www.typescriptlang.org/" target="_blank">TypeScript</a>.  The idea is that we code in TypeScript and it gets "transpiled" into JavaScript since most of the browsers only support JavaScript.  So the transpiling job is managed by Webpack.  The moment you change your TypeScript file and save it, the Webpack kicks in and transpile the .ts file to .js file using TypeScript compiler.<br/>

Webpack comes with its own configuration file called <code>webpack.config.js</code> and this is where you specify what type of file should be processed using what module. For example, to transpile TypeScript files to JavaScript files, you need to place a configuration setting indicating which <a href="https://webpack.github.io/docs/using-loaders.html" target="_blank">Loader</a> to use to transpile .ts files as .js files.  You need such setting for each and every file type that you want Webpack to handle.<br/>

Webpack can be run on demand by typing <code>webpack</code> at command line.  Assuming that you have <code>webpack.config.js</code> file in the same folder, Webpack runs all tasks and simply quits.  You can also run webpack in <code>--watch</code> mode so that files are recompiled automatically as you change them.  The final task of Webpack is to bundle all possible files into one file and place it in a designated folder.  Assets like images, fonts, videos etc. are not bundled but are placed in appropriate folder(s) as individual files.  In this project you can see the bundled files in <code>/dist</code> folder.  This is where the job of Webpack ends.<br/>

To run the above Angular 2 app as web application, we need a web server.  The Webpack team addressed this issue by supplying a small web server called <a href="https://webpack.github.io/docs/webpack-dev-server.html" target="_blank">webpack-dev-server</a>.  As the name indicates, it is only meant for development. You may use full fledged Express.js (node.js) web server for production.  So the advantage of webpack-dev-server is that it performs all the jobs of Webpack and also acts as web server to run the Angular 2 app. One thing to note here is that webpack-dev-server does not copy the files to any folder.  All the content is <a target="_blank" href="https://github.com/webpack/docs/issues/32">served from memory</a>.  So, do not look for the output files in <code>/dist</code> folder when you run webpack-dev-server.<br/>

It is <a href="https://webpack.js.org/guides/installation/" target="_blank">discouraged</a> to install Webpack globally.  When it comes to webpack-dev-server, we installed it as global module as we could not find any specific recommendation.
<hr/>
</div>

<div id="divLoader">
<h3>Loader</h3>
Loaders are used to extend the basic functionality of Webpack.  For example, Webpack uses ts-loader to interact with TypeScript compiler to transpile .ts file to .js file.  Similarly you may be used different loaders to handle other files like .less, .css etc.
<hr/>
</div>

<div id="divTypeScript">
<h3>TypeScript Compiler</h3>

The job of TypeScript compiler is very straight forward.  It takes .ts file as input and gives .js file as output.  Just like any other compiler, it comes with various options.<br/>

If you want to see how TypeScript compiler works, do the following:<br/>
<ul>
    <li>Open a console and go to the root folder of the project.</li>
    <li>Make sure you have <code>tsconfig.json</code> in the root folder.</li>
    <li>Run the following command to see bunch of .js files in a new ./dist folder.<br/>
    <code>./node_modules/typescript/bin/tsc -p ./ --sourceRoot ./src --outDir ./dist</code></li>
    <li>If you happened to install TypeScript globally, try the following command.<br/>
    <code>tsc -p ./ --sourceRoot ./src --outDir ./dist</code></li>
</ul>
<br/>
    Note: Angular 2 is developed using TypeScript.  Even if you do not use TypeScript to develop your project, you still need to install TypeScript compiler for the sake of Angular 2.
    <hr/>
</div>

<div id="divTypeDefs">
<h3>Type Definitions</h3>

Type Definitions are the consequence of TypeScript. Let us say you have decided to use TypeScript where you are expected to specify the 'type' of a variable when you declare it.  Life is good if all the modules that you use in your project are developed in TypeScript.  But TypeScript allows you to use JavaScript modules to take advantage of them.  Now the problem is that JavaScript does not have the concept of variable 'types'.  Unlike TypeScript, you do not specify the type of a variable when you declare it in JavaScript.  When JavaScript modules are imported to TypeScript program, the TypeScript compiler may treat all the JavaScript variables of type 'any'.  This defeats the whole purpose of TypeScript.  To overcome this problem, Type Definitions are introduced where you define a type to your JavaScript variables.  Type Definitions are stored in a separate file with extension .d.ts.  The TypeScript compiler uses this file to check whether a JavaScript variable that was supposed to be an integer is assigned any other type of value and raises exception during compilation, if true.
<br/>
Please refer <a href="http://stackoverflow.com/questions/34590168/what-are-typescript-typings" target="_blank">this StackOverflow topic</a> for more understanding of this topic.
<hr/>
</div>


<div id="divTypings">
<h3>Typings</h3>
Because of the reasons specified above, JavaScript libraries/modules need to come up with their Type Definition files to take advantage of TypeScript.  To save humanity from this problem, few great souls took up the task and generated Type Definition files (.d.ts) for many popular JavaScript modules.<br/><br/>

Typings is a module that lets you install and manage those Type Definition files located in various repositories.  Please check the <a href="https://www.npmjs.com/package/typings" target="_blank">official npm page</a> for more details.
<hr/>
</div>

<div id="divAngular">
<h3>Angular 2 Compiler</h3>
There is only one Angular compiler but it can be used in two ways.<br/><br/>

<strong>just-in-time (JIT) compilation</strong><br/>
In this method the compiler gets loaded into browser first and compiles your application on the fly at runtime.  Angular uses a particular set of libraries in this method.  This is the method we are using to run this app.
<br/><br/>
<strong>ahead-of-time (AOT) compilation</strong><br/>
In this method, your application is compiled once at build time and Angular uses different set of libraries to execute your app in browser.
<br/><br/>
Check <a href="https://angular.io/docs/ts/latest/cookbook/aot-compiler.html" target="_blank">this article</a> for more info.
<hr/>
</div>
<div id="divBootstrap">
    <h3>jQuery, Bootstrap etc.</h3>
Angular 2 recommends to 'import' JavaScript and CSS modules like jQuery, Bootstrap etc., as opposed to 'include' them using <code>link</code> and <code>script</code> tags.  The first step is to download respective module using <code>npm</code> and then 'import' it like it is in <code>app.module.ts</code>.
    <hr/>
</div>

<div id="divFontAwesome">
    <h3>Font Awesome</h3>
Font-Awesome is similar to Bootstrap but I could not make it work using 'import' method.  I have tried both <code>Font-Awesome</code> and  <code>Font-Awesome-webpack</code> modules unsuccessfully, at the time of writing.<br/><br/>

Then I employed the second method where you download Font-Awesome files to <code>/assets/font-awesome</code> folder and include the <code>font-awesome.min.css</code> file using <code>styleUrls</code> in <code>app.component.ts</code> file.  Then <code>CopyWebpackPlugin</code> plugin is used to move Font-Awesome related font files to <code>dist/fonts</code> folder.
    <hr/>
</div>


<div id="divCSS">
    <h3>CSS</h3>

Let us say you defined a simple CSS class in <code>styles.css</code> file but you don't find it working when you tried to use it in sub components.  The issue is with those strange things like <code>_ngcontent-c0, _ngcontent-c1</code>.  This is Angular way of implementing <a href="https://glazkov.com/2011/01/14/what-the-heck-is-shadow-dom/" target="_blank">Shadow DOM</a>.
    <br/><br/>
But if you are in hurry to quickly finish those UI mockups, then disable encapsulation as shown below.<br/><br/>
    <pre>
import { Component,ViewEncapsulation } from '@angular/core';

@Component({
encapsulation: ViewEncapsulation.None
})</pre>
    See <code>app.component.ts</code> file in this project for reference.
<hr/>
</div>

<div id="divPitFalls">
    <h3>Pitfalls</h3>
    <h4>Asset path reference in @Component decorator::</h4>
    <div>
        Take a closer look at the URL values for <code>styleUrls</code> and <code>templateUrl</code> .  The <code>styleUrls</code> value should NOT start with "/" while <code>templateUrl</code> value should.<br/><br/>
<pre>
@Component({
selector: 'my-app',
styleUrls: [ '<mark style="color:red;font-weight: bold;">src/app/app.component.css' ],
templateUrl: '<mark style="color:red;font-weight: bold;">/src/app/app.component.html'
})
</pre>
<h4>Webpack auto loader::</h4>
<div>
Webpack-dev-server comes with a nice feature to reload the browser as you make changes to your code on the server.  As per the <a href="https://webpack.github.io/docs/webpack-dev-server.html" target="_blank">documentation</a> this feature can be enabled by adding <code>--hot</code> to command line as shown below <br/><br/>
<code>webpack-dev-server --host 0.0.0.0 --port 8082 --inline --progress --hot </code>
<br/><br/>
But there seems to be an issue as it was not working the way the documentation suggests.  Thanks to the community <a href="https://github.com/webpack/webpack-dev-server/issues/206" target="_blank">(daniel-erickson)</a> for the following workaround.
<br/>
<ol>
    <li>Remove <code>--hot</code> from command-line.<br/></li>
    <li>Add <code>new webpack.HotModuleReplacementPlugin()</code> in <code>plugins</code> section of <code>webpack.config.js</code> file.  You can see the webpack config file of this project for reference.</li>
</ol>

</div>

</div>
<hr/>
</div>

<div id="divWorkingSamples">
<h3>Working Samples</h3>
It is important to understand how Webpack re-arranges things as it parses and bundles various files.  Here is some insight on how common things like styles, fonts and images work in the world of Webpack and Angular 2.<br/><br/>

<ol>
<li><strong>CSS</strong>
    <ul class="workingSampleSteps">
        <li>Look for <code>styles.css</code> import in <code>app.module.ts</code>. This is how the CSS file gets loaded into HTML file.</li>
        <li>Look for CSS class <code>pageTitle</code> in <code>/styles/styles.css</code> and <code>app.component.html</code> files.</li>
    </ul>
</li>
<li><strong>Image</strong>
    <ul>
        <li>Look for variable <code>yogaPractice</code> in <code>app.component.ts</code> and <code>app.component.html</code> files.  Compare the original file name with the one in <code>src</code> attribute of <code>img</code> tag. They are different.  The reason is <code>test: /\.(png|jpg|gif|ico)$/</code> loader in <code>webpack.config.js</code>.  This loader transforms the image file name as per the instructions as Webpack bundles the HTML and CSS files. This is one way of doing things.</li>
        <br/>
        <li>There is another method. Look for <code>styles.css</code> import in <code>app.module.ts</code>. This is how the CSS file gets loaded into HTML file.</li>
        <li>Look for CSS class <code>logoImage</code> in <code>/styles/styles.css</code> and <code>app.component.html</code> files. Compare the image path and file name in <code>styles.css</code> and the browser.  Path and file names are different for the same reason specified above.
        </li>
    </ul>
</li>
<li><strong>jQuery</strong>
    <ul>
        <li>Look for <code>jquery</code> import in <code>app.module.ts</code>. This is Angular 2 way of doing things.</li>
        <li>Look for <code>jquery</code> in <code>webpack.config.js</code>. Please <a href="https://webpack.js.org/plugins/provide-plugin/" target="_blank">read here</a> for more info.</li>
        <li>Look for <code>panel-title</code> in <code>app.component.ts</code> and <code>app.component.html</code> files.</li>
    </ul>
</li>
<li><strong>Bootstrap</strong>
    <ul>
        <li>Look for <code>bootstrap</code> js and CSS imports in <code>app.module.ts</code>. This is how Bootstrap is made available in HTML.</li>
        <li>Look for <code>nav</code> tag in <code>app.component.html</code>.</li>
    </ul>
</li>
<li><strong>Bootstrap Glyphicon</strong>
    <ul>
        <li>Look for <code>bootstrap</code> js and CSS imports in <code>app.module.ts</code>. Glyphicons are part of Bootstrap.</li>
        <li>Look for <code>glyphicon-ok</code> in <code>app.component.html</code> <i class="glyphicon glyphicon-ok"></i></li>
    </ul>
</li>
<li><strong>Font Awesome</strong>

<ul>
    <li>Font Awesome supposed to be loaded like Bootstrap but respective node_modules failed to do the job. So I followed traditional way to load it.  That is the reason you see <code>/assets/font-awesome</code> folder.  Otherwise font-awesome shoud be under node_modules folder.</li>
    <li>Look for <code>font-awesome</code> in <code>app.component.ts</code>.  This is how the CSS files are loaded.</li>
    <li>Look for <code>font-awesome</code> in <code>webpack.config.js</code>.  This is how the font files are moved to <code>/dist/fonts</code> folder for public consumption.</li>
    <li>Now Look for <code>fa-book</code> CSS class in <code>app.component.html</code>.</li>
</ul>
</li>
<li><strong>Angular 2</strong>
    <ul>
        <li>If you see this page without errors, Angular 2 is working.</li>
    </ul>
</li>
</ol>

<hr/>
</div>


<div id="divUsefulCommands">
<h3>Useful Commands</h3>
<ol>
<li>
    To find version numbers for Angular CLI and Angular Compiler, open a console window and switch to project root folder and enter the following command.<br/>
    <code>ng -v</code>
</li>
<br/>

<li>
    To find TypeScript version, open a console window and switch to project root folder and enter the following command.<br/>
    <code>node_modules/typescript/bin/tsc --version</code><br/><br/>
    If TypeScript is installed globally, the following command should work<br/>
    <code>tsc --version</code>
</li>
<br/>

<li>
    To kill a process running on a given port.<br/>
    <code>sudo fuser -k 8080/tcp</code>

</li>
</ol>

<hr/>
</div>

<div id="divUsefulWebsites">
<h3>Useful Websites</h3>
<ul>
<li><a href="Fontastic.me" target="_blank">Fontastic.me</a> to create custom icon font files.</li>
<li><a href="tinyPng.com" target="_blank">tinyPng.com</a> to drastically reduce image file size.</li>
</ul>
<hr/>
</div>

<div id="divProductionDeployment">
<h3>Production Deployment</h3>
There is a crucial step when packaging files into /dist folder.  By default webpack won't copy the .html and .css files that are associated with controllers into /dist folder.  To address this issue we could use CopyWebpackPlugin in webpack.js file as shown below.
	<br/>
	<br/>
<pre>
var CopyWebpackPlugin = require('copy-webpack-plugin');
...

plugins:[
	new CopyWebpackPlugin([
		{from: 'app/**/*.html', to:'www/'},
		{from: 'app/**/*.css', to:'www/'}
	])
]
</pre>

<br/><br/>
		The above configuration copies all the .html and .css files from all the folders under 'app'.  The same directory structure will be created under /www at the destination.
		<br/><br/>
		Once the /Dist folder is created, it can be copied to the production environment where a NodeJS webserver could be used to launch the website.
<hr/>
</div>


<div id="divConclusion">
<h3>Conclusion</h3>
Well, looks like you are one of those few survivors <i>(unless you simply scrolled down)</i>.  I am also new to this spaghetti party.  If you find better way of doing Webpack and Angular 2, please share.
</div>
