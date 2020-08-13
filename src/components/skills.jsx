import React from 'react';
import * as d3 from 'd3';

require('../styles/skills.scss');

class Skills extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: 'none',
            name: "",
            rank: 0,
            data: []
        };
    }
    componentDidMount() {
        let data = [
            {
                cat: 'backend', name: 'ASP.Net CORE', value: 4,
                icon: '/assets/coding_icons/asp-net.png'
            },
            {
                cat: 'frontend', name: 'Bootstrap 4', value: 4,
                icon: '/assets/coding_icons/bootstrap-4.svg'
            },
            {
                cat: 'language', name: 'C#', value: 5,
                icon: '/assets/coding_icons/csharp.svg'
            },
            {
                cat: 'language', name: 'Python', value: 5,
                icon: '/assets/coding_icons/python.png'
            },
            {
                cat: 'backend', name: 'Git', value: 4,
                icon: '/assets/coding_icons/git.png'
            },
            {
                cat: 'frontend', name: 'HTML 5', value: 5,
                icon: '/assets/coding_icons/html-5.png'
            },
            {
                cat: 'language', name: 'Java', value: 5,
                icon: '/assets/coding_icons/java.png'
            },
            {
                cat: 'language', name: 'JavaScript ES5 & ES6', value: 5,
                icon: '/assets/coding_icons/javascript.png'
            },
            {
                cat: 'frontend', name: 'JQuery', value: 5,
                icon: '/assets/coding_icons/jquery.png'
            },
            {
                cat: 'backend', name: 'NodeJS', value: 5,
                icon: '/assets/coding_icons/nodejs.svg'
            },
            {
                cat: 'backend', name: 'PostgreSQL', value: 4,
                icon: '/assets/coding_icons/postgresql.png'
            },
            {
                cat: 'backend', name: 'Ruby on Rails', value: 5,
                icon: '/assets/coding_icons/rails.png'
            },
            {
                cat: 'frontend', name: 'React', value: 5,
                icon: '/assets/coding_icons/react.jpg'
            },
            {
                cat: 'frontend', name: 'Redux', value: 4,
                icon: '/assets/coding_icons/redux.png'
            },
            {
                cat: 'language', name: 'Ruby', value: 5,
                icon: '/assets/coding_icons/ruby.png'
            },
            {
                cat: 'backend', name: 'Docker', value: 4,
                icon: '/assets/coding_icons/docker.png'
            },
            {
                cat: 'backend', name: 'AWS as an ecosystem', value: 5,
                icon: '/assets/coding_icons/aws.png'
            },
            {
                cat: 'data', name: 'Airflow', value: 5,
                icon: '/assets/coding_icons/airflow.png'
            },
            {
                cat: 'data', name: 'Hadoop', value: 4,
                icon: '/assets/coding_icons/hadoop.png'
            },
            {
                cat: 'data', name: 'Spark', value: 5,
                icon: '/assets/coding_icons/spark.png'
            },
            {
                cat: 'data', name: 'Hive, Presto, Athena', value: 4,
                icon: '/assets/coding_icons/hive.png'
            }
        ];
        // const bounds = this.svg.getBoundingClientRect();
        // this.buildSkills(data);
        // const checkScroll = () => {
        //     let dx = window.pageYOffset + 300;
        //     if(dx > bounds.top) {
        //         window.removeEventListener("scroll", checkScroll);
        //         this.buildSkills(data);
        //     }
        // }
        this.buildSkills(data);
        // window.addEventListener("scroll", checkScroll);
        this.svg.addEventListener("mouseleave", e => {
            this.setState({
                category: 'none',
                name: "",
                rank: 0
            });
        });
    }

    /* NB: I didn't make this */
    /*** SOURCE: https://naustud.io/tech-stack/ ***/
    buildSkills(data) {
        /*eslint-enable indent*/
        /*global d3*/
        let svg = d3.select(this.svg);
        let width =svg.node().getBoundingClientRect().width; // get width in pixels
        let height = svg.attr('height');
        let centerX = width * 0.5;
        let centerY = height * 0.5;
        let strength = 0.05;
        let focusedNode;

        let format = d3.format(',d');
        let allCats = {};
        const colors = ['#bd589e', '#6b3d71', '#ffa4e3', '#a053aa', 'blue'];
        let scaleColor = (cat) => {
            if(!allCats[cat])
                allCats[cat] = colors[Object.keys(allCats).length];
            return allCats[cat];
        };

        // use pack to calculate radius of the circle
        let pack = d3.pack()
            .size([width, height ])
            .padding(1.5);

        let forceCollide = d3.forceCollide(d => d.r + 1);

        // use the force
        let simulation = d3.forceSimulation()
            // .force('link', d3.forceLink().id(d => d.id))
            .force('charge', d3.forceManyBody())
            .force('collide', forceCollide)
            // .force('center', d3.forceCenter(centerX, centerY))
            .force('x', d3.forceX(centerX).strength(strength))
            .force('y', d3.forceY(centerY).strength(strength));

        let root = d3.hierarchy({ children: data })
            .sum(d => d.value);

        // we use pack() to automatically calculate radius conveniently only
        // and get only the leaves
        let nodes = pack(root).leaves().map(node => {
            const data = node.data;
            return {
                x: centerX + (node.x - centerX) * 3, // magnify start position to have transition to center movement
                y: centerY + (node.y - centerY) * 3,
                r: 0, // for tweening
                radius: node.r, //original radius
                id: data.cat + '.' + (data.name.replace(/\s/g, '-')),
                cat: data.cat,
                name: data.name,
                value: data.value,
                icon: data.icon,
                desc: data.desc,
            };
        });

        let node = svg.selectAll('.node')
            .data(nodes)
            .enter().append('g')
            .attr('class', 'node')
            .call(d3.drag()
                .on('start', (d) => {
                    if (!d3.event.active) { simulation.alphaTarget(0.2).restart(); }
                    d.fx = d.x;
                    d.fy = d.y;
                })
                .on('drag', (d) => {
                    d.fx = d3.event.x;
                    d.fy = d3.event.y;
                })
                .on('end', (d) => {
                    if (!d3.event.active) { simulation.alphaTarget(0); }
                    d.fx = null;
                    d.fy = null;
                }));

        const ticked = () => {
            node.attr('transform', d => `translate(${d.x},${d.y})`)
                .select('circle').attr('r', d => d.r);
        }
        
        simulation.nodes(nodes).on('tick', ticked);

        node.append('circle')
            .attr('id', d => d.id)
            .attr('r', 0)
            .style('fill', d => scaleColor(d.cat))
            .transition().duration(2000).ease(d3.easeElasticOut)
                .tween('circleIn', (d) => {
                    let i = d3.interpolateNumber(0, d.radius);
                    return (t) => {
                        d.r = i(t);
                        simulation.force('collide', forceCollide);
                    };
                });

        node.append('clipPath')
            .attr('id', d => `clip-${d.id}`)
            .append('use')
            .attr('xlink:href', d => `#${d.id}`);

        // display text as circle icon
        node.filter(d => !String(d.icon).includes('assets/'))
            .append('text')
            .classed('node-icon', true)
            .attr('clip-path', d => `url(#clip-${d.id})`)
            .selectAll('tspan')
            .data(d => d.icon.split(';'))
            .enter()
                .append('tspan')
                .attr('x', 0)
                .attr('y', (d, i, nodes) => (13 + (i - nodes.length / 2 - 0.5) * 10))
                .text(name => name);

        // display image as circle icon
        node.filter(d => String(d.icon).includes('assets/'))
            .append('image')
            .classed('node-icon', true)
            .attr('clip-path', d => `url(#clip-${d.id})`)
            .attr('xlink:href', d => d.icon)
            .attr('x', d => -d.radius * 0.7)
            .attr('y', d => -d.radius * 0.7)
            .attr('height', d => d.radius * 2 * 0.7)
            .attr('width', d => d.radius * 2 * 0.7);

        node.append('title')
            .text(d => (d.cat + '::' + d.name + '\n' + format(d.value)));

        let lastMouseOver = null;
        node.on("mouseover", data => {
            if (lastMouseOver && data.name === lastMouseOver.name)
                return;
            if (lastMouseOver) {
                lastMouseOver.r = lastMouseOver.radius;
            }
            lastMouseOver = data;
            const ir = d3.interpolateNumber(data.r, data.radius * 1.5);
            d3.transition(500).ease(d3.easePolyOut).tween(`expand-${data.name}`, () => {
                return t => {
                    data.r = ir(t);
                    simulation.force('collide', forceCollide);
                    this.setState({});
                }
            });

            this.highlight(data);
        });

        node.on("click", data => this.highlight(data));

    }

    highlight(node) {
        const info = {
            category: node.cat,
            name: node.name,
            rank: node.value
        };
        this.setState(info);
    }

    render() {
        return (
            <section className={`skills ${this.state.category}`}>
                <h2>SKILLS</h2>
                <div className="container">
                    {this.renderHighlights()}
                    <svg id="skills-svg" ref={(el) => this.svg = el} width="100%" height="500"/>
                </div>
            </section>
        );
    }

    renderHighlights() {
        if(this.state.category !== "none")     
            return (<div id="highlighted">
                <h4>{this.state.category}</h4>
                <p>{this.state.name}</p>
                <div className="star-ratings-css">
                    <div className={`star-ratings-css-top rank-${this.state.rank}`}><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
                    <div className="star-ratings-css-bottom"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
                </div>
            </div>);
        return null;
    }
}

export default Skills;