import './App.css';
import React, { Component } from 'react';

import Subject from './components/Subject';
import ReadContent from './components/ReadContent';
import TOC from './components/TOC';
import Control from './components/Control';
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';

class App extends Component {
  constructor(props) {
    super(props);
    this.max_content_id = 3;

    this.state = {
      mode: "read", //App 컴포넌트의 모드
      selected_content_id: 2,//TOC에서 선택한 Content 컴포넌트에 나타날 항목의 번호
      welcome: { title: 'welcome', desc: 'Hello React' },
      subject: { title: "WEB", sub: "world wide web!" },
      contents: [//TOC에 넘겨줄 props(title)와 TOC에서 선택해서 Content에 나올 내용
        { id: 1, title: 'HTML', desc: 'HTML is HyperText...' },
        { id: 2, title: 'CSS', desc: 'CSS is for design' },
        { id: 3, title: 'JavaScript', desc: 'JavaScript is good' }
      ]
    }
  }

  getReadContent() {
    let i = 0;
    while (i < this.state.contents.length) {
      let data = this.state.contents[i];
      if (data.id === this.state.selected_content_id) {
        return data;
      }
      i = i + 1;
    }
  }

  getContent() {
    let _title, _desc, _article = null;

    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} sub={_desc} />
    } else if (this.state.mode === 'read') {

      let _content = this.getReadContent();
      _article = <ReadContent title={_content.title} sub={_content.desc} />

    } else if (this.state.mode === 'create') {
      _article = <CreateContent onSubmit={(_title, _desc) => {
        this.max_content_id = this.max_content_id + 1;

        // let _contents = this.state.contents.concat(
        //   { id: this.max_content_id, title: _title, desc: _desc }
        // )

        let _contents = Array.from(this.state.contents);
        _contents.push({id:this.max_content_id, title:_title, desc:_desc});

        this.setState({
          mode:'read',
          contents : _contents,
          selected_content_id:this.max_content_id
        })

        // this.state.contents.push(
        //   { id: this.max_content_id, title: _title, desc: _desc }
        // );

        this.setState({
          contents: _contents
        })
      }} />
    }
    else if (this.state.mode === 'update') {
      let _content = this.getReadContent();

      _article = <UpdateContent
        data={_content}
        onSubmit={(_id, _title, _desc) => {
          let _contents = Array.from(this.state.contents)
          let i = 0;
          while (i < _contents.length) {
            if (_contents[i].id === _id) {
              _contents[i] = { id: _id, title: _title, desc: _desc };

              console.log(_contents[i])
              break;
            }
            i = i + 1;
          }
          this.setState({
            contents: _contents,
            mode: 'read' //즉시 읽기 전용으로 모드를 변경함
          });
        }} />
    }
    return _article
  }

  render() {


    return (
      <div>
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function () {
            this.setState({ mode: 'welcome' });
          }.bind(this)}
        ></Subject>

        <TOC
          data={this.state.contents}
          onChangePage={function (id) {
            this.setState(
              {
                mode: 'read',
                selected_content_id: Number(id)
              }
            )

          }.bind(this)}
        />

        <Control
          onChangeMode={(e) => {
            this.setState({
              mode: e
            })
          }}
        >

        </Control>
        {this.getContent()}
      </div>
    )
  }
}

export default App;
