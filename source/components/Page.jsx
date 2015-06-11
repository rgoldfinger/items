var React = require('react');

require('./__styles__/App.styl');
require('./__styles__/boxLayouts.styl');

var bgc = '#121C1D'
var bgcOp = 'rgba(18, 29, 29, 0.5)'


var Body = React.createClass({

  render() {
    return (
      <div>
        <div style={{backgroundImage: 'url(img/banner.jpg)', height: '500px', backgroundSize: '100%'}} className="poster">
          <div className="item-container horizontal-box align-items-spacearound">
            <div className="align-self-start flex-1">
              <h2 className="light-text banner-text">University of Edinburgh</h2>
              <h3 className="light-text banner-text">Introduction to Astrobiology</h3>
            </div>
            <div style={{textAlign: 'right'}} className="align-self-end flex-1">
              <h2 className="light-text banner-text">Conditions on the early earth</h2>
              <h3 className="light-text banner-text">Module 1.2</h3>
            </div>
          </div>
        </div>
        <div className="space-200"/>
        <div className="item-container horizontal-box align-items-center">
          <h2 className="light-text">What would that have meant for early life forms?</h2>
        </div>

        <div className="item-container">
          <div style={{backgroundColor: bgc}} className="text-box light-text">
            <div>Once the earth had formed in the early nebula, the stage was then set for the emergence of life. But what were the conditions like, on the early earth, and how do we know what those conditions were like? Well, the earth formed 4.56 billion years ago, but some of the earliest rocks that we have on the earth are between about 4 billion years to the 3.8 billion years old. So the problem we have, that there is about 11% of the Earth's history that is missing in the geological record, and that record that we do have, is very sparse. But nevertheless, those ancient rocks that we have do tell us something about conditions on the early Earth and what those conditions might have been like, for early life as it emerged. </div>
          </div>
        </div>

        <div style={{backgroundImage: 'url(img/greenland_isua.jpg)', height: '800px', backgroundSize: '100%'}}>
          <div className="horizontal-box align-items-spacebetween item-container">
            <div style={{backgroundColor: bgcOp}} className="text-box light-text align-self-end">
              <div>So they're very altered. But, nevertheless, we can tell something about those rocks, and what the conditions might have been like, on early earth. And if we look at those Isua rocks, we find evidence of a number of different types of rocks that might have existed in those original ancient sediments. </div>
            </div>
            <div className="align-self-start text-box light-text sans">Some of the oldest rocks are from the Isua region, of western Greenland. And these are rocks that were made up of ancient sediments on early earth, about 3.8 billion years ago. And they've subsequently been pressurized and heated, over the many billions of years, in which those rocks have been subducted into the crust of the earth and then re-exposed. </div>
          </div>
        </div>

        <div className="space-200"/>

        <div style={{backgroundImage: 'url(img/limestone_coast.jpg)', height: '900px', backgroundSize: '100%'}}>
          <div className="item-container">
            <div style={{backgroundColor: bgcOp}} className="text-box light-text">
              <div>First of all, we find evidence of limestones. And limestones are essentially carbonates laid down today in modern marine environments, for example, in shallow environments around the edges of the coast. Limestones tend to suggest the presence of liquid water. We also find metamorphosed sandstones. Sand stones are essentially coarse, sand if you'd like, that's conglomerated together, and formed a rock. It's become lithified, it's formed a rock. And, suggests as well presence of water in environments. Sand stones are sedimentary rocks, sediments that are laid down in environments where there is water. For example, in shallow rivers or shallow marine environments. </div>
            </div>
          </div>
        </div>

        <div className="space-200"/>

        <div style={{backgroundImage: 'url(img/underwater_volcano.jpg)', height: '800px', backgroundSize: '100% 100%'}}>
          <div className="item-container">
            <div style={{backgroundColor: bgcOp}} className="text-box light-text">
              <div>And there's also some evidence in these ancient rocks of pillow lavas. Pillow lavas are formed when basalt, which is volcanic rock, is erupted in a volcanic eruption, and comes into contact with water. For example, at the bottom of the oceans. And as soon as that lava comes into contact with water, it's instantly quenched and solidifies. Forming these shapes that look a bit like pillows. Hence its name, pillow lava. </div>
            </div>
          </div>
        </div>

        <div style={{backgroundImage: 'url(img/pillow_lava.jpg)', height: '800px', backgroundSize: '100%'}} >
          <div className="item-container">
            <div style={{backgroundColor: bgcOp}} className="text-box light-text">
              <div>So pillow lava, lime stones and sand stones, remnants of these sorts of rocks and the isua in rocks, suggest that there was liquid water on the early Earth, at least by 3.8 billion years ago, and probably before. There's other evidence as well. But, the point about this, evidence is it shows that the early Earth might have been quite similar to the present day Earth, in the sense that there were bodies of liquid water available for life to emerge in possibly oceans. </div>
            </div>
          </div>
        </div>

        <div className="item-container horizontal-box align-items-center">
          <div style={{backgroundColor: bgc}} className="text-box light-text">
            <div>When we look at all the evidence of, early rocks and the rock record, it tells us several things about the earth 3.8 billion years ago. It tells us that the earth had bodies of, of water, much like the present day earth. It also tells us that there was exposed land that was being weathered, and producing sediments that may have been responsible for some of these rocks like sand stones. Sandstones are composed of quartz. Suggesting there were continental areas that were being weathered and producing that quartz. It was then washing out into the oceans, and forming part of those now ancient rocks that we, we find in Greenland.</div>
          </div>
        </div>

        <div style={{backgroundImage: 'url(img/crust.jpg)', height: '800px', backgroundSize: '100%',   backgroundRepeat: 'no-repeat'}} />
        <div className="item-container horizontal-box align-items-center">
          <div className="text-box light-text">
            <div>These sorts of processes if they were occurring then, suggest that the Earth at this time had similar geological processes that we're familiar with today. For example, plate tectonics. Plates being subducted, and then reformed and rewrought. And these sedimentary rocks being formed in the hydrological process. It was occurring on early Earth. </div>
          </div>
        </div>

        <div style={{backgroundImage: 'url(img/earth_cutaway.jpg)', height: '800px', backgroundSize: '100%'}} >
          <div className="item-container">
            <div style={{backgroundColor: bgcOp}} className="text-box light-text">
              <div>And this suggests that the Earth also had internal layering. A differentiation of the different parts of the earth from the core, through the mantle, through to the crust. It suggests that the structure of the earth is much like present day earth. So, at least in terms of the presence of liquid water, the presence of land masses, the earth might have been somewhat similar to present day earth about 3.8 billion years ago. The sort of environment that we think might have been condusive to life. </div>
            </div>
          </div>
        </div>

        <div className="space-400"/>

        <div className="item-container horizontal-box align-items-center">
          <h2 className="light-text">What about the other characteristics of the planet that are important for biology? </h2>
        </div>

        <div className="item-container horizontal-box align-items-center">
          <div style={{backgroundColor: bgc}} className="text-box light-text">
            <div>Well, we can learn something about the early atmosphere, and we'll talk about Oxygen in the atmosphere later on in this course. </div>
          </div>
        </div>

        <div style={{backgroundImage: 'url(img/early_earth.png)', height: '800px', backgroundSize: '100% 100%',   backgroundRepeat: 'no-repeat'}} >
          <div className="item-container horizontal-box align-items-right">
            <div style={{backgroundColor: bgcOp}} className="text-box light-text">
              <div>But the rock record tells us that if there was liquid water there, the temperature must have been within the range that's suitable for life. If there was liquid water, then the temperature must have been between freezing and maybe a few tens of degrees, to allow that liquid water to persist on the surface of the planet. That suggests that the temperature conditions were suitable for life. We know from the rock record that the early atmosphere only had trace quantities of oxygen. Today those, concentrations of oxygen at 21%. In the early history of the Earth, the oxygen concentrations would've been much less than .1%. And so the atmosphere was very different from today. Carbon dioxide would've been much more abundant. And there would have been more Methane as well. Some of that Methane, perhaps, being produced by biology. But, both Carbon Dioxide and Methane are greenhouse gases, and they would have contributed to warming the surface of the Earth at that time. </div>
            </div>
          </div>
        </div>

        <div className="space-400"/>

        <div className="item-container horizontal-box align-items-center">
          <h2 className="light-text">Why is this important?</h2>
        </div>

        <div className="item-container horizontal-box align-items-center">
          <div style={{backgroundColor: bgc}} className="text-box light-text">
            <div>Well, we know that the sun was less luminous than it is today. The early sun was perhaps about 25% less luminous than it is today. Which means that it would have been imparting less heat to the Earth during that time. And one question that's been raised is, if the sun was less luminous than today, why didn't the Earth just freeze over? Why wasn't the Earth too cold for life and liquid water 3.8 billion years ago? </div>
          </div>
        </div>

        <div style={{backgroundImage: 'url(img/sun_horizon.jpg)', height: '800px', backgroundSize: '100% 100%',   backgroundRepeat: 'no-repeat'}} >
          <div className="item-container horizontal-box align-items-right">
            <div className="text-box light-text">
              <div>And one answer to that paradox, that's being called the faint young sun paradox, is that carbon dioxide in the atmosphere and methane, 2 greenhouse gases, would have warmed up the surface of the Earth and provided conditions that would have been clement for liquid water. And that warming effect would have compensated for the cooler young sun, in that early history of the Earth. And so the presence of these gases may have been very important, not just for warming the earth and keeping it much, warmer than today. And, and providing the liquid water environments that early life would have required. But they might have also been important for life itself. Carbon dioxide would have provided a source of carbon for early lifeforms in the oceans and on the earl, early land masses. </div>
            </div>
          </div>
        </div>


        <div className="item-container horizontal-box align-items-center">
          <div style={{backgroundColor: bgc}} className="text-box light-text">
            <div>So we know that the atmosphere was very different than today. This also has consequences for one other physical factor that's very important for life, ultraviolet radiation. That's the radiation that gives you sunburn when you go out into the sun, or you might deliberately go out and get a sun tan. That comes form ultraviolet radiation. Most of the ultraviolet radiation that comes from our sun, is screened out by the ozone shield. </div>
          </div>
        </div>

        <div className="item-container horizontal-box align-items-center">
          <div style={{backgroundColor: bgc}} className="text-box light-text">
            <div>Today, the 21% oxygen in our atmosphere drifts up to the top of the atmosphere where it reacts with sunlight, to form the gas ozone. And ozone is very good cutting out short wavelengths of ultraviolet radiation. In fact, it reduces the ultraviolet radiation quite considerably. If there was no ozone shield, the damage caused by ultraviolet radiation to biological molecules, would be about 1000 times more, than if we have that ozone shield. Only the early Earth, because levels of atmospheric oxygen were so much lower than today, there was no ozone shield. And so it's possible that damage to biology would have been about 1000 times higher than today. </div>
          </div>
        </div>

        <div className="item-container horizontal-box align-items-center">
          <h2 className="light-text">What would that have meant for early life forms?</h2>
        </div>

        <div className="item-container horizontal-box align-items-center">
          <div style={{backgroundColor: bgc}} className="text-box light-text">
            <div>It probably would of, would of, it probably would have meant that they would have had to have shielded themselves. Perhaps by living inside rocks, or living beneath layers of microbes that would have protected them from the ultraviolet radiation. Microbial mats, those top layers of microbes would have acted as sacrificial layers, to protect the microbes underneath from the intense ultraviolet radiation. So this could've been one factor that was very different on the early earth. Some people have speculated that the high concentrations of methane in the atmosphere of the early earth might have reacted with sunlight and formed a hydrocarbon smog. And that smog of complex organic carbons, could have streamed out ultraviolet radiation. So there may have been other ways on early earth in which that intense ultraviolet radiation was screened out. But in the worst case scenario, the UV radiation would have been 1000 times higher than today. This would have been a challenge, for early life. </div>
          </div>
        </div>

        <div style={{backgroundImage: 'url(img/asteroid_impact.jpg)', height: '800px', backgroundSize: '100% 100%',   backgroundRepeat: 'no-repeat'}} >
          <div className="item-container horizontal-box align-items-right">
            <div style={{backgroundColor: bgcOp}} className="text-box light-text">
              <div>Another challenge that was very prevalent on early Earth was higher, numbers of asteroid and comet impacts on the surface of the early Earth. We know that there was a large number of impacts between about 4.1 and 3.8 billion years ago. A much higher rate of impact than on the surface of present day Earth. Perhaps many orders of magnitudes, many tens of times higher than the present day Earth. </div>
            </div>
          </div>
        </div>

        <div style={{backgroundImage: 'url(img/moon.jpg)', height: '1000px', backgroundSize: '100% 100%',   backgroundRepeat: 'no-repeat'}} >
          <div className="item-container">
            <div style={{backgroundColor: bgcOp}} className="text-box light-text">
              <div>How do we know that? Well we know that by looking at the moon. The moon preserves a record of impacts from the early solar system. And the large number of craters that you can see on the moon, that you can see with your own eye, by looking up at the moon in the night sky, you can see those craters. They are the evidence of intense bombardment in the early history of our solar system. And we call this period, the late heavy bombardment. It would have been a period that was very challenging for life. Because those impacts would have heated up habitats. Probably made some places too hot for life to have been able to tolerate the physical conditions caused by asteroid and comet impacts. So the emergence of life had to, occur in this very challenging environment of, heavy asteroid and comet impacts. </div>
            </div>
          </div>
        </div>

        <div className="item-container horizontal-box align-items-center">
          <div style={{backgroundColor: bgc}} className="text-box light-text">
            <div>So, what we see in this picture, is an early Earth that's somewhat similar to the present day Earth. Bodies of liquid water, oceans, probably early continental land masses. But things were very different as well. A very different atmospheric composition. Much more challenging environment with higher levels of asteroid and comet impacts. And also high level of volcanism. Volcanic activity would have been much greater on the early Earth. But this was the setting, in which the first life forms emerged on our planet. </div>
          </div>
        </div>

        <div className="item-container horizontal-box align-items-center">
          <h2 className="light-text">So what have we learnt?</h2>
        </div>

        <div className="item-container horizontal-box align-items-center">
          <div className="sans text-box light-text">
            <div>We've learnt that the geological record gives us our main clues about the conditions of early Earth. </div>
          </div>
          <div className="sans text-box light-text">
            <div>We've learned that over 10% of that record is missing. But nevertheless, there are ancient rocks about 3.8 billion years old, some slightly older. That give us clues as to what the early conditions were like. We've learned that the Earth has some features that are strangely familiar to us. There would have been oceans. Areas of continental land masses as well, much like present day Earth. We've also learned that things are very different as well, the atmosphere was very different. Low concentrations of oxygen, higher concentrations of carbon dioxide, and methane, which might have been important for climate at that time.</div>
          </div>
          <div className="sans text-box light-text">
            <div>We've learned that the conditions for life would have been quite challenging. For example, higher levels of ultraviolet radiation may have existed on the early Earth. And also, much higher levels of asteroid and comet bombardment that would have provided a challenge for early life trying to emerge in these early habitats. But nevertheless, these environments were now clement enough for the origin and emergence of life.</div>
          </div>
        </div>

        <div className="item-container horizontal-box align-items-center">
        </div>

        <div className="item-container horizontal-box align-items-center" />
      </div>
    );
  }
});

var Container = React.createClass({

  render() {
    return (
      <div style={{backgroundColor: '#111'}}>
        <div style={{}}>
          <Body />
        </div>
      </div>
    );
  }
});

module.exports = Container;
