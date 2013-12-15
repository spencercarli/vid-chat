var videos = [
	{
    "title": "Porsche 918 Spyder driven - is it better than a Bugatti Veyron?",
    "url": "www.youtube.com/embed/D9vBKEGjytE",
    "id": "a"
	},
	{
    "title": "Jaguar C-X75 hypercar - LaFerrari and McLaren P1 rival",
    "url": "www.youtube.com/embed/CspcnZ1IBs8",
    "id": "b"
	}
];

Template.dashboard.helpers({
  video: function(){
    return videos;
  }
});