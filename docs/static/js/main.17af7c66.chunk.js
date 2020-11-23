(this.webpackJsonpbinaurealis=this.webpackJsonpbinaurealis||[]).push([[0],{12:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),i=n(6),r=n.n(i),l=n(1),c=n(2),o=n(4),u=n(3),p=new(window.AudioContext||window.webkitAudioContext),h=p.destination,f=!1,y=function(){function e(){Object(l.a)(this,e);var t=p.createOscillator(),n=p.createOscillator();this.baseNode=t,this.beatNode=n;var a=new StereoPannerNode(p,{pan:-1});t.connect(a);var s=new StereoPannerNode(p,{pan:1});n.connect(s);var i=p.createGain();this.gainNode=i,a.connect(i),s.connect(i),i.connect(h),f||(p.suspend(),f=!0),t.start(),n.start()}return Object(c.a)(e,[{key:"updateOscillators",value:function(e,t){try{e=parseInt(e),t=parseInt(t),e<20?e=20:e>2e4&&(e=2e4),Math.abs(t)>60&&(t=60*Math.sign(t)),this.baseNode.frequency.value=e,this.beatNode.frequency.value=e+t}catch(n){throw p.suspend(),n}return{frequency:e,offset:t}}},{key:"changeGain",value:function(e){return((e=parseFloat(e))<0||e>1)&&(e=.5),this.gainNode.gain.value=e}}]),e}(),d=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={gain:a.props.gain,frequency:a.props.frequency,offset:a.props.offset,context:new y},a.state.context.updateOscillators(a.props.frequency,a.props.offset),a.state.context.changeGain(a.props.gain),a}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.props.stopPlay()}},{key:"componentWillUnmount",value:function(){this.props.stopPlay()}},{key:"updateOscillators",value:function(){try{this.state.context.updateOscillators(this.state.frequency,this.state.offset)}catch(e){this.props.stopPlay()}}},{key:"changeFrequency",value:function(e){this.setState({frequency:e.target.value},this.updateOscillators)}},{key:"changeOffset",value:function(e){this.setState({offset:e.target.value},this.updateOscillators)}},{key:"changeGain",value:function(e){var t=this;this.setState({gain:e.target.value},(function(){return t.state.context.changeGain(t.state.gain)}))}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"player frui-panel",style:{display:"flex",justifyContent:"space-evenly",minWidth:"600px"}},s.a.createElement("div",{style:{padding:"20px"}},s.a.createElement("label",null,"Volume: ",this.state.gain),s.a.createElement("br",null),s.a.createElement("input",{type:"range",min:"0",max:"1",style:{margin:"5px"},step:"0.01",value:this.state.gain,onChange:this.changeGain.bind(this)}),s.a.createElement("br",null)),s.a.createElement("div",{style:{padding:"20px"}},s.a.createElement("label",null,"Base Frequency"),s.a.createElement("br",null),s.a.createElement("input",{type:"number",min:"20",max:"20000",style:{margin:"5px"},value:this.state.frequency,onChange:this.changeFrequency.bind(this)})),s.a.createElement("div",{style:{padding:"20px"}},s.a.createElement("label",null,"Offset: ",this.state.offset),s.a.createElement("br",null),s.a.createElement("input",{type:"range",min:"-60",max:"60",style:{margin:"5px"},step:"1",value:this.state.offset,onChange:function(t){return e.changeOffset(t)}})))}}]),n}(a.Component),m=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={children:a.props.children},a}return Object(c.a)(n,[{key:"addAudioComponent",value:function(){var e=[].concat(this.state.children);e.push(s.a.createElement(d,{key:e.length,gain:.1,frequency:880,offset:-5,stopPlay:this.props.stopPlay.bind(this)})),this.setState({children:e})}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,this.state.children,s.a.createElement("button",{className:"frui-btn frui-btn--fab",onClick:this.addAudioComponent.bind(this)},"Add"))}}]),n}(a.Component),b=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={isPlaying:!1},a}return Object(c.a)(n,[{key:"onPlay",value:function(){var e=this;this.setState({isPlaying:!this.state.isPlaying},(function(){return e.state.isPlaying?p.resume():p.suspend()}))}},{key:"stopPlay",value:function(){p.suspend(),this.setState({isPlaying:!1})}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("button",{className:"frui-btn frui-btn--primary frui-btn--large",onClick:this.onPlay.bind(this)},this.state.isPlaying?"Pause":"Play"),s.a.createElement(m,{stopPlay:this.stopPlay.bind(this)},s.a.createElement(d,{key:0,gain:.3,frequency:120,offset:20,stopPlay:this.stopPlay.bind(this)}),s.a.createElement(d,{key:1,gain:.3,frequency:220,offset:-10,stopPlay:this.stopPlay.bind(this)}),s.a.createElement(d,{key:2,gain:.2,frequency:420,offset:-5,stopPlay:this.stopPlay.bind(this)})))}}]),n}(a.Component);function g(){return s.a.createElement(b,null)}r.a.render(s.a.createElement(g,null),document.querySelector("#root"))},7:function(e,t,n){e.exports=n(12)}},[[7,1,2]]]);
//# sourceMappingURL=main.17af7c66.chunk.js.map