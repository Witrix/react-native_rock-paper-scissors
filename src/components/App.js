import React, { Component } from 'react';
import MyLocalization       from "../my-lib/MyLocalzation";
import Navigation           from "./navigation/Navigation";

type Props = {};
export default class App extends Component<Props> {
    render() {
        let locale = MyLocalization.getLocale();
        return (
          <Navigation/>
        );
    }
}
