const assert = require('assert');

function placements(hotrod, diskSizes) {
    
    this.three_per = function three_per() { 
        assert(diskSizes.length == 5);

        hotrod.ingress.placeOn({diskSize: diskSizes[0]});
        hotrod.mapper[0].placeOn({diskSize: diskSizes[0]});
        // 46.0
        hotrod.mapper[1].placeOn({diskSize: diskSizes[0]});
        // 46.0
        hotrod.mapper[2].placeOn({diskSize: diskSizes[0]});
        // 46.0


        hotrod.driver[0].placeOn({diskSize: diskSizes[1]});
        // 34.3
        hotrod.driver[1].placeOn({diskSize: diskSizes[1]});
        // 34.3
        hotrod.frontend.placeOn({diskSize: diskSizes[1]});
        // 3.86561
        hotrod.customer[0].placeOn({diskSize: diskSizes[1]});
        // 3.773

        hotrod.driver[2].placeOn({diskSize: diskSizes[2]});
        // 34.3
        hotrod.customer[1].placeOn({diskSize: diskSizes[2]});
        // 3.773
        hotrod.customer[2].placeOn({diskSize: diskSizes[2]});
        // 3.773
        hotrod.api_haproxy.placeOn({diskSize: diskSizes[2]});
        // 5.488

        hotrod.map_haproxy.placeOn({diskSize: diskSizes[3]});
        // 5.488
        hotrod.api[0].placeOn({diskSize: diskSizes[3]});
        // 70.0
        hotrod.api[1].placeOn({diskSize: diskSizes[3]});
        // 70.0
        hotrod.postgres.placeOn({diskSize: diskSizes[3]});
        // 15.68

        hotrod.api[2].placeOn({diskSize: diskSizes[4]});
        // 70.0
        hotrod.route[0].placeOn({diskSize: diskSizes[4]});
        // 46.0
        hotrod.route[1].placeOn({diskSize: diskSizes[4]});
        // 46.0
        // 131

        hotrod.redis.placeOn({diskSize: diskSizes[5]});
        // 34.0
        hotrod.route[2].placeOn({diskSize: diskSizes[5]});
        // 46.0
        // 126
 
    } 
}

module.exports = placements;
