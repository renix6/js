addKiller("tvhello", {
	"canKill": function(data) {
	    return data.src.indexOf('tvhello.com') !== -1;
	},

	"process": function(data, callback) {
		var flashvars = parseFlashVariables(data.params.flashvars);
		if(match) {
			callback({
				"playlist": [{
					"poster": img_url,
					"sources": [{
				        "url" : decodeURIComponent(params.file),
						"format": "MP4",
						"isNative": true
					}]
				}]
			});

		}
	}
});
