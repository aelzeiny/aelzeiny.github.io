import React from 'react';
import { Route, Switch } from 'react-router-dom';

import BatchVsCelery from './blogs/batch_v_celery';

import '../styles/blog.scss'

export default class BlogIndex extends React.Component {
    constructor(props) {
        super(props);

        this.posts = [
            {date: '2020-11-23', blogId: 'batch-v-celery', title: '[Airflow] AWS Batch Executor >= Celery Executor', component: BatchVsCelery},
            // {date: '2020-11-20', blogId: 'airlow-aws-motivation', title: '[Airflow] Motivation Behind Building AWS Native Executors', component: NULL},
            // {date: '2018-12-01', blogId: 'dags-datastructure', title: 'Directed Acylic Graphs - The Design Pattern', component: NULL},
        ];
    }

    renderRoute({ blogId, component }) {
        return (
            <Route path={`/blog/${blogId}`} component={component}/>
        );
    }

    renderPost({date, blogId, title}) {
        return (
            <li><a href={`/blog/${blogId}`}>{date}  {title}</a></li>
        );
    }

    render() {
        return (
            <section id="blog-div" className="container">
                <h2>Data Blog</h2>
                <Switch>
                    {this.posts.map(this.renderRoute)}
                    <Route path="/">
                        <ul>
                            {this.posts.map(this.renderPost)}
                        </ul>
                    </Route>
                </Switch>
            </section>
        );
    }
}