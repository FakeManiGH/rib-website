import './Info.css'
import ImageBrowser from 'react-image-browser'
import { Helmet } from 'react-helmet'
import bird1 from './assets/bird1.jpg'
import bird2 from './assets/bird2.jpg'
import bird3 from './assets/bird3.jpg'
import bird4 from './assets/bird4.jpg'
import nature1 from './assets/nature1.jpg'
import nature2 from './assets/nature2.jpg'
import nature3 from './assets/nature3.jpg'
import nature4 from './assets/nature4.jpg'
import scenery1 from './assets/scenery1.jpg'
import scenery2 from './assets/scenery2.jpg'
import scenery3 from './assets/scenery3.jpg'
import scenery4 from './assets/scenery4.jpg'
import wildlife1 from './assets/wildlife1.jpg'
import wildlife2 from './assets/wildlife2.jpg'
import wildlife3 from './assets/wildlife3.jpg'
import wildlife4 from './assets/wildlife4.jpg'
import logo from './assets/rib_logo.png'


function Info() {
  const previewImages = [
    { url: bird1, title: 'Swan Spreading its Wings', description: 'Swan spreading its wings to assert dominance.', location: 'Espoo, Finland', author: 'Timo Anjala' },
    { url: bird2, title: 'Baby Crow', description: 'Baby crow sitting on a branch.', location: 'Espoo, Finland', author: 'Timo Anjala' },
    { url: bird3, title: 'Wood Pidgeon', description: 'Wood pidgeon in a tree.', location: 'Espoo, Finland', author: 'Timo Anjala' },
    { url: bird4, title: 'Mallard in Reeds', description: 'Mallard in reed field, maybe on a lookout.', location: 'Espoo, Finland', author: 'Timo Anjala' },
    { url: nature1, title: 'Droplets on Long Grass', description: 'Drops of water on long grass just after rain.', location: 'Vantaa, Finland', author: 'Timo Anjala' },
    { url: nature2, title: 'Droplets on Leaf', description: 'Droplets on leaf, after rain.', location: 'Asikkala, Finland', author: 'Timo Anjala' },
    { url: nature3, title: 'Small Mushrooms', description: 'Small mushrooms growing from old stump.', location: 'Espoo, Finland', author: 'Timo Anjala' },
    { url: nature4, title: 'Big Droplet on Grass', description: 'Big droplet grown on cup shaped grass during rain.', location: 'Asikkala, Finland', author: 'Timo Anjala' },
    { url: scenery1, title: 'Moody Fields', description: 'Sun and dark clouds create awesome contrasts on summer field.', location: 'Sysmä, Finland', author: 'Timo Anjala' },
    { url: scenery2, title: 'Road through Lake', description: 'Road meanders through lake in Asikkala.', location: 'Pulkkilanharju, Asikkala, Finland', author: 'Timo Anjala' },
    { url: scenery3, title: 'Snowy Stables', description: 'Snow covered old stables in Espoo.', location: 'Espoo, Finland', author: 'Timo Anjala' },
    { url: scenery4, title: 'Foggy Winter Weather', description: 'Fog descends over Finnish archipelago.', location: 'Espoo, Finland', author: 'Timo Anjala' },
    { url: wildlife1, title: 'Roe Deer Resting on Field', description: 'Male roe deer resting on sunny field.', location: 'Espoo, Finland', author: 'Timo Anjala' },
    { url: wildlife2, title: 'Small Wild Bunny', description: 'Small wild bunny eating grass on private yard.', location: 'Espoo, Finland', author: 'Timo Anjala' },
    { url: wildlife3, title: 'Roe Deer on Snowy Field', description: 'Roe deer standing in snow covered field staring at camera.', location: 'Espoo, Finland', author: 'Timo Anjala' },
    { url: wildlife4, title: 'Fox Standing on Hay Bale', description: 'Stand-off with fox on hay bale.', location: 'Espoo, Finland', author: 'Timo Anjala' },
  ];

  const images = [
    { url: bird1, title: 'Swan spreading its wings', description: 'Swan spreading its wings to assert dominance', location: 'Espoo, Finland', author: 'Timo Anjala' },
    { url: bird2, title: 'Baby Crow', description: 'Baby crow sitting on a branch', location: 'Espoo, Finland', author: 'Timo Anjala' },
    { url: bird3, title: 'Wood Pidgeon', description: 'Wood pidgeon in a tree', location: 'Espoo, Finland', author: 'Timo Anjala' },
    { url: bird4, title: 'Mallard in reeds', description: 'Mallard in reed field, maybe a lookout.', location: 'Espoo, Finland', author: 'Timo Anjala' },
  ];

  return (
    <>
      <Helmet>
        <title>React ImageBrowser</title>
        <meta name="description" content="React-imageBrowser is a simple to use image browser component for React." />
        <meta name="keywords" content="React, Image, Browser, Component, NPM, Lightbox, Gallery, Fullscreen, Slideshow, Browse" />
        <meta name="author" content="Timo Anjala" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      <header>
        <img className='logo' src={logo} alt="react image browser logo" />
        <h1>React imageBrowser</h1>
        <p><strong>by <a href="https://timoanjala.com" target='_blanc'>Timo Anjala</a></strong>, &#128273; MIT license</p>
        <br />
        <ul className='row-list'>
          <li>Easy to set up</li>
          <li>Responsive</li>
          <li>Customizable</li>
          <li>Automated slideshow</li>
          <li>Slide & Grid view</li>
          <li>Swipe-motion</li>
        </ul>
        <br />
        <nav className="button-group">
          <a href="#" target='_blanc'><button><span className='white'>&#10095;</span>View project in GitHub</button></a>
          <a href="#" target='_blanc'><button><span className='white'>&#10095;</span>Download NPM</button></a>
        </nav>
      </header>

      <nav className='content-nav'>
        <a href="#intro">Introduction</a>
        <a href="#installation">Installation</a>
        <a href="#basic-setup">Basic Setup</a>
        <a href="#props">Props</a>
        <a href="#open-imageBrowser">Open Image Browser</a>
        <a href="#navigation">Navigation</a>
        <a href="#browser-support">Browser Support</a>
        <a href="#dependencies">Dependencies</a>
        <a href="#contributing">Contributing</a>
        <a href="#license">MIT License</a>
        <a href="#help">Need Help?</a>
      </nav>

      <main>
      <article id="preview">
        <h2>INTRODUCTION</h2>
        <p>React imageBrowser is a simple to use image browser component for React. It is designed to be easy to set up and use, while still being customizable and responsive.
          It can be used to display images in a grid or as a slideshow, with swipe-motion and automated slideshow features.</p>
        <p><strong>Click on any image</strong> or <strong>Open Gallery</strong> -button.</p>
        <ImageBrowser images={previewImages} />
        <ImageBrowser button='Open Gallery' images={previewImages} open={'grid'} />
      </article>


      <article id="installation">
        <h2>INSTALLATION</h2>
        <section>
          <h3>NPM</h3>
          <pre>
            <code>
              npm install react-image-browser
            </code>
          </pre>
          <p>Install react-image-browser package from NPM. Package includes react-image-browser.jsx, imageBrowser.css and this documentation.</p>
        </section>
        <section>
          <h3>Manual</h3>
          <p>Clone the repository from GitHub and copy react-image-browser.jsx and imageBrowser.css to your project. You can also copy this documentation.</p>
        </section>
      </article>


      <article id="basic-setup">
        <h2>BASIC SETUP</h2>
        <section>
          <h3>Import</h3>
          <pre>
            <code>
              import ImageBrowser from ./react-image-browser
            </code>
          </pre>
          <p>Import ImageBrowser component from react-image-browser.js file.</p>
        </section>
        <section>
          <h3>Array of image objects</h3>
          <pre>
            <code>
              const images = [ <br /> 
                &#123; url: &apos;imageURL&apos;, title: &apos;imageTitle&apos;, description: &apos;ImageALT&apos;, author: &apos;imageAuthor&apos; &#125;, <br />
                &#123; url: &apos;imageURL&apos;, title: &apos;imageTitle&apos;, description: &apos;ImageALT&apos;, author: &apos;imageAuthor&apos; &#125; <br />
              ];
            </code>
          </pre>
          <p>Set up an array of objects, each containing image <strong>url</strong>, (<strong>title</strong>), (<strong>description</strong>), (<strong>author</strong>), 
          (<strong>date</strong>), (<strong>location</strong>). Only url is mandatory, other info is optional. Images can be local or fetched from internet.</p>
        </section>
        <section>
          <h3>Use component</h3>
          <pre>
            <code>
              &lt;ImageBrowser images=&apos;images&apos; /&gt;
            </code>
          </pre>
          <p>Insert ImageBrowser component to your page and pass your image array as <strong>images</strong> -prop.
            ImageBrowser will display images in a grid, with eventListener that opens browser overlay, displaying set image as selected image.</p>
        </section>
      </article>


      <article id="props">
        <h2>PROPS</h2>
        <section>
          <h3>images</h3>
          <pre>
            <code>
              &lt;ImageBrowser <strong>images=&apos;yourImgArray&apos;</strong> /&gt;
            </code>
          </pre>
          <p>Array of image objects. Each object must contain <strong>url</strong> -property. Optional properties are <strong>title</strong>, <strong>description</strong>, <strong>author</strong>, <strong>date</strong>, <strong>location</strong>.</p>
        </section>
        <section>
          <h3>open</h3>
          <pre>
            <code>
              &lt;ImageBrowser images=&apos;yourImgArray&apos; <strong>open=&apos;grid&apos;</strong> /&gt;
            </code>
          </pre>
          <p>Set to <strong>grid</strong> to open ImageBrowser in grid view. Default is <strong>slide</strong>.</p>
        </section>
        <section>
          <h3>button</h3>
          <pre>
            <code>
              &lt;ImageBrowser images=&apos;yourImgArray&apos; <strong>button=&apos;Open ImageBrowser&apos;</strong> /&gt;
            </code>
          </pre>
          <p>Set a string / node to open ImageBrowser with button. Button style can be modified from inside <strong>imageBrowser.css</strong> file.</p>
        </section>
        <section>
          <h3>actions</h3>
          <pre>
            <code>
              &lt;ImageBrowser images=&apos;yourImgArray&apos; <strong>actions=&apos;true&apos;</strong> /&gt;
            </code>
          </pre>
          <p>Set to <strong>true</strong> to display <strong>Like</strong>, <strong>Share</strong>, and <strong>Comment</strong> button on image info. Default is <strong>false</strong>. You need to pass your own functions to these buttons to function.</p>
        </section>
      </article>


      <article id="open-imageBrowser">
        <h2>OPEN IMAGE BROWSER</h2>
        <section>
          <h3>Open with button</h3>
          <pre>
            <code>
              &lt;ImageBrowser <strong>button=&apos;Open ImageBrowser&apos;</strong> images=&apos;yourImgArray&apos; /&gt;
            </code>
          </pre>
          <p>By adding <strong>button</strong> -prop on ImageBrowser component, the open mechanism is presented as button on page, with innerHTML of your choosing.
            Prop is set up as node, so you can add more than text in your button. Button style can be modified from inside <strong>imageBrowser.css</strong> file. (open-button).</p>
          <ImageBrowser button='Open ImageBrowser' images={images} />
        </section>
        <section>
          <h3>Open by clicking an image</h3>
          <pre>
            <code>
              &lt;ImageBrowser images=&apos;yourImgArray&apos; /&gt;
            </code>
          </pre>
          <p>Without <strong>button</strong> -prop ImageBrowser will display images on page, in responsive 125px/image grid. 
            Each image contains eventListener that opens browser overlay, displaying set image as selected image.
            Grid can be modified to your liking from <strong>imageBrowser.css</strong> file. (page-image-grid).</p>
          <ImageBrowser images={images} />
        </section>
      </article>


      <article id="navigation">
        <h2>NAVIGATION</h2>
        <section>
          <h3>Keyboard</h3>
          <ul>
            <li><strong>Arrow Left</strong> - Previous image</li>
            <li><strong>Arrow Right</strong> - Next image</li>
            <li><strong>Enter</strong> - Toggle fullscreen</li>
            <li><strong>Escape</strong> - Close Slideshow - Close fullscreen - Close Info - Close Slideshow Menu - Close ImageBrowser</li>
            <li><strong>I</strong> - Toggle Info</li>
            <li><strong>P</strong> - Toggle Slideshow Menu</li>
            <li><strong>Space</strong> - Pause/Play Slideshow</li>
          </ul>
        </section>
        <section>
          <h3>Mouse</h3>
          <ul>
            <li><strong>Scroll Up</strong> - Previous Image</li>
            <li><strong>Scroll Down</strong> - Next Image</li>
            <li><strong>Double Click (image)</strong> - Toggle fullscreen</li>
          </ul>
        </section>
        <section>
          <h3>Touch</h3>
          <ul>
            <li><strong>Swipe Left</strong> - Next Image</li>
            <li><strong>Swipe Right</strong> - Previous Image</li>
            <li><strong>Swipe Up</strong> - Open Info</li>
            <li><strong>Swipe Down</strong> - Close Info</li>
            <li><strong>Double Tap (image)</strong> - Toggle fullscreen</li>
          </ul>
        </section>
      </article>


      <article id="browser-support">
        <h2>BROWSER SUPPORT</h2>
        <p>React imageBrowser is designed to work on all modern browsers and devices. It has been tested on:</p>
        <ul className='disc-list'>
          <li>Chrome</li>
          <li>Firefox</li>
          <li>Safari</li>
          <li>Edge</li>
          <li>Opera</li>
          <li>Samsung Internet</li>
        </ul>
      </article>


      <article id="dependencies">
        <h2>DEPENDENCIES</h2>
        <p>React-imageBrowser is built with React and styled with CSS. React-Swipeable is set up as <strong>peerDependency</strong> and will be downloaded automatically.</p>
        <ul className='disc-list'>
          <li>react: 18.3.1</li>
          <li>react-dom: 18.3.1</li>
          <li>react-swipeable: 7.0.2</li>
        </ul>
      </article>


      <article id="contributing">
        <h2>CONTRIBUTING</h2>
        <p>Feel free to contribute to this project by forking it and making pull requests. You can also report bugs and suggest improvements by opening an issue.</p>
        <p>Project is open source and MIT licensed.</p>
      </article>

      <article id="license">
        <h2>MIT LICENSE</h2>
        <p>Copyright &copy; Timo Anjala</p>
        <p>Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the Software), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:</p>
        <p>The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.</p>
        <p>THE SOFTWARE IS PROVIDED AS IS, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</p>
      </article>

      <article id="help">
        <h2>NEED HELP?</h2>
        <p>ChatGPT and Google will help you.</p>
        <p>Good luck!</p>
      </article>
      </main>
      
      
    </>
  )
}

export default Info;
