import React from "react";
import MenuItem from "../Menu-item/menu-item.component";
import "./directory.styles.scss";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "Vagas",
          imageUrl:
            "https://images.unsplash.com/flagged/photo-1563536310477-c7b4e3a800c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
          id: 1,
        },

        {
          title: "Publicacões",
          subtitle: "Veja notícias de empresas e usuários!",
          imageUrl:
            "https://images.unsplash.com/photo-1515793789486-599a7f522b54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
          id: 2,
        },

        {
          title: "Cursos/Estudos",
          imageUrl:
            "https://images.unsplash.com/photo-1535982330050-f1c2fb79ff78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80",
          id: 3,
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(
          ({ title, subtitle, id, imageUrl, linkUrl }) => (
            <MenuItem
              key={id}
              title={title}
              subtitle={subtitle}
              imageUrl={imageUrl}
            />
          )
        )}
      </div>
    );
  }
}

export default Directory;
