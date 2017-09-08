({
	PlayAmbulanceSiren : function(component) {
		var rUrl = $A.get('$Resource.LightningEventsResources');
        rUrl = rUrl + '/resources/ambulanceSiren.mp3';
        console.log(rUrl);
        var domElement = component.find("audioclip").getElement();
        domElement.src=rUrl;
        domElement.play();
	}
})