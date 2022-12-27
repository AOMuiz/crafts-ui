import React from "react";
import Accordion from "./Accordion";

const accordionData = [
  {
    title: "Section 1",
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`,
  },
  {
    title: "Section 2",
    content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
      reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
      quaerat iure quos dolorum accusantium ducimus in illum vero commodi
      pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
      quidem maiores doloremque est numquam praesentium eos voluptatem amet!
      Repudiandae, mollitia id reprehenderit a ab odit!`,
  },
  {
    title: "Section 3",
    content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
      quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste? Quas?`,
  },
];

export default {
  title: "Components/Disclosure/Accordion",
  component: Accordion,
};

const Template = (args) => <Accordion {...args} />;

export const Default = () => (
  <div>
    <h1>Accordion Demo</h1>
    <Accordion>
      {accordionData.map(({ title, content }) => (
        <div label={title}>
          <p>{content}</p>
        </div>
      ))}
    </Accordion>
  </div>
);

export const MultipleOpen = () => (
  <div>
    <h1>Accordion Demo</h1>
    <Accordion allowMultipleOpen={true}>
      <div label="Alligator Mississippiensis">
        <p>
          <strong>Common Name:</strong> American Alligator
        </p>
        <p>
          <strong>Distribution:</strong> Texas to North Carolina, US
        </p>
        <p>
          <strong>Endangered Status:</strong> Currently Not Endangered
        </p>
      </div>
      <div label="Alligator Sinensis">
        <p>
          <strong>Common Name:</strong> Chinese Alligator
        </p>
        <p>
          <strong>Distribution:</strong> Eastern China
        </p>
        <p>
          <strong>Endangered Status:</strong> Critically Endangered
        </p>
      </div>
    </Accordion>
  </div>
);
