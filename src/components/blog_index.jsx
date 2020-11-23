import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import '../styles/blog.scss'

export default class BlogIndex extends React.Component {
    constructor(props) {
        super(props);

        this.posts = [
            {date: '2020-11-23', blogId: 'batch-v-celery', title: '[Airflow] AWS Batch Executor >= Celery Executor'},
            {date: '2020-11-20', blogId: 'airlow-aws-motivation', title: '[Airflow] Motivation Behind Building AWS Native Executors'},
            {date: '2018-12-01', blogId: 'dags-datastructure', title: 'Directed Acylic Graphs - The Design Pattern'},
        ];
    }

    renderRoute({date, blogId, title}) {
        return (
            <Route path={`/blog/${blogId}`}>
                <li>{date}  {title}</li>
            </Route>
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
                <h2>Blog</h2>
                {/* <Switch>
                    {this.posts.map(this.renderRoute)}
                </Switch> */}
                <ul>
                    {this.posts.map(this.renderPost)}
                </ul>
            </section>
        );
    }
}