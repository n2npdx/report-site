import React from 'react';
import PropTypes from 'prop-types';
import BarGroup from '../Visualizations/BarGroup';
import Subsection from '../Layout/Subsection';

const HEADING_TEXT = 'Policing Data';

const Policing = ({ toggleExpandedSubsection }) => (
  <Subsection
    isRow={false}
    toggleExpandedSubsection={toggleExpandedSubsection}
    vis={<BarGroup dataContext="policingReportsByYear" legendLabels={['Portland Crime Reports Filed', 'CES Crime Reports Filed']} />}
    subsectionId={HEADING_TEXT}
    headingText={HEADING_TEXT}
    subHeadingText="Portland Wide - Dispatched calls and Crime Reports (crime figures are mock) filed in 2016, 2017, 2018"
    visableText={(
      <div className="paragraph-container">
        <div className="paragraph">
          This diagram is a comparison of requests to services for policing in 2017 and 2018.
        </div>
        <div className="paragraph">
          Pellentesque habitant hyperlink style senectus et netus et malesuada fames ac turpis egestas. Cras velit elit, finibus eget mattis sit amet, maximus vitae urna. Duis a nulla arcu. Aenean ut magna sed tellus vehicula euismod. Vivamus aliquam in diam sit amet feugiat. Curabitur id neque sit amet libero aliquet aliquam tempor dapibus felis.
        </div>
      </div>
    )}
    expandedText={(
      <div className="paragraph-container">
        <div className="paragraph">
          This diagram is a comparison of requests to services for policing in 2017 and 2018.
        </div>
        <div className="paragraph">
          Pellentesque habitant hyperlink style senectus et netus et malesuada fames ac turpis egestas. Cras velit elit, finibus eget mattis sit amet, maximus vitae urna. Duis a nulla arcu. Aenean ut magna sed tellus vehicula euismod. Vivamus aliquam in diam sit amet feugiat. Curabitur id neque sit amet libero aliquet aliquam tempor dapibus felis.
        </div>
      </div>
    )}
  />
);

Policing.propTypes = {
  toggleExpandedSubsection: PropTypes.func,
};

export default Policing;
