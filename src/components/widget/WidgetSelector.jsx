import React from 'react';
import Graph from './graph.png';

const availableWidgets = [
  {
    previewImg: 'https://via.placeholder.com/200x80',
    previewName: 'Placeholder Image',
    id: 'ImageWidget',
    layout: { i: 'ImageWidget', x: 0, y: 0, w: 6, h: 2 },
  },
  {
    previewImg: Graph,
    previewName: 'Graph',
    id: 'GraphWidget',
    layout: { i: 'GraphWidget', x: 0, y: 0, w: 12, h: 3 },
  },
];

export const WidgetSelector = () => {
  return (
      <div style={{ margin: '1rem', padding: '1rem', border: '1px solid lightgrey' }}>
        <div>Drag and drop a widget from following list:</div>
        <div style={{ borderBottom: '1px solid', display: 'flex', flexWrap: 'wrap' }}>
          {availableWidgets.map(widget => (
            <div
              key={widget.id}
              unselectable="on"
              onDragStart={e => {
                // this is a hack for firefox
                // Firefox requires some kind of initialization
                // which we can do by adding this attribute
                // @see https://bugzilla.mozilla.org/show_bug.cgi?id=568313
                e.dataTransfer.setData('text/plain', '');
                e.dataTransfer.setData('droppableWidget', JSON.stringify(widget));
                return true;
              }}
            >
              <img src={widget.previewImg} alt={widget.previewName}/>
              <div>{widget.previewName}</div>
            </div>
        ))}
      </div>
    </div>
  );
};