const assert = require('assert');

function placements(hotrod, diskSizes) {
    
    this.three_per = function three_per() { 
        assert(diskSizes.length == diskSizes);

        hotrod.mapper[i].placeOn({diskSize: diskSizes[0]});
        hotrod.mapper[i].placeOn({diskSize: diskSizes[0]});
        hotrod.mapper[i].placeOn({diskSize: diskSizes[0]});
        hotrod.ingress.placeOn({diskSize: diskSizes[0]});
        hotrod.driver[i].placeOn({diskSize: diskSizes[0]});
        hotrod.driver[i].placeOn({diskSize: diskSizes[0]});
        hotrod.customer[i].placeOn({diskSize: diskSizes[0]});

        hotrod.driver[i].placeOn({diskSize: diskSizes[1]});
        hotrod.customer[i].placeOn({diskSize: diskSizes[1]});
        hotrod.customer[i].placeOn({diskSize: diskSizes[1]});
        hotrod.frontend.placeOn({diskSize: diskSizes[1]});
        hotrod.api_haproxy.placeOn({diskSize: diskSizes[1]});
        hotrod.map_haproxy.placeOn({diskSize: diskSizes[1]});
        hotrod.api[i].placeOn({diskSize: diskSizes[1]});

        hotrod.api[i].placeOn({diskSize: diskSizes[1]});
        hotrod.route[i].placeOn({diskSize: diskSizes[1]});
        hotrod.route[i].placeOn({diskSize: diskSizes[1]});
        hotrod.postgres.placeOn({diskSize: diskSizes[1]});

        hotrod.redis.placeOn({diskSize: diskSizes[2]});
        hotrod.route[i].placeOn({diskSize: diskSizes[2]});

    } 
}

module.exports = placements;
