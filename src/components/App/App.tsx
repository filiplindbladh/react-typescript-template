import * as React from "react";
import "./App.css";
import "../../assets/css/base.css";
export interface Props {
    test: string;
}

class App extends React.Component<Props, {}> {
    render() {
        return <div className="app" />;
    }
}

export default App;
