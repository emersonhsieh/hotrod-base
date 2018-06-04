// Copyright (c) 2015 Uber Technologies, Inc.

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

package hyperbahn

import (
	"time"

	"github.com/uber/tchannel-go/hyperbahn/gen-go/hyperbahn"
	"github.com/uber/tchannel-go/thrift"
)

// Discover queries Hyperbahn for a list of peers that are currently
// advertised with the specified service name.
func (c *Client) Discover(serviceName string) ([]string, error) {
	ctx, cancel := thrift.NewContext(time.Second)
	defer cancel()

	result, err := c.hyperbahnClient.Discover(ctx, &hyperbahn.DiscoveryQuery{ServiceName: serviceName})
	if err != nil {
		return nil, err
	}

	var hostPorts []string
	for _, peer := range result.GetPeers() {
		hostPorts = append(hostPorts, servicePeerToHostPort(peer))
	}

	return hostPorts, nil
}
