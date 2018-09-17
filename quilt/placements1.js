const assert = require('assert');

function placements(hotrod, diskSizes) {
    
    this.three_per = function three_per() { 
        assert(diskSizes.length == 6);

        hotrod.ingress.placeOn({diskSize: diskSizes[0]});
        hotrod.mapper[0].placeOn({diskSize: diskSizes[0]});
        hotrod.mapper[1].placeOn({diskSize: diskSizes[0]});
        hotrod.mapper[2].placeOn({diskSize: diskSizes[0]});

        hotrod.driver[0].placeOn({diskSize: diskSizes[1]});
        hotrod.driver[1].placeOn({diskSize: diskSizes[1]});
        hotrod.frontend.placeOn({diskSize: diskSizes[1]});
        hotrod.customer[0].placeOn({diskSize: diskSizes[1]});

        hotrod.driver[2].placeOn({diskSize: diskSizes[2]});
        hotrod.customer[1].placeOn({diskSize: diskSizes[2]});
        hotrod.customer[2].placeOn({diskSize: diskSizes[2]});
        hotrod.api_haproxy.placeOn({diskSize: diskSizes[2]});

        hotrod.map_haproxy.placeOn({diskSize: diskSizes[3]});
        hotrod.api[0].placeOn({diskSize: diskSizes[3]});
        hotrod.api[1].placeOn({diskSize: diskSizes[3]});
        hotrod.postgres.placeOn({diskSize: diskSizes[3]});

        hotrod.api[2].placeOn({diskSize: diskSizes[4]});
        hotrod.route[0].placeOn({diskSize: diskSizes[4]});
        hotrod.route[1].placeOn({diskSize: diskSizes[4]});
        
        hotrod.redis.placeOn({diskSize: diskSizes[5]});
        hotrod.route[2].placeOn({diskSize: diskSizes[5]});

    } 
}

module.exports = placements;
