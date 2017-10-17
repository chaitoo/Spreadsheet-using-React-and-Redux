import React from 'react';
import { connect } from 'react-redux';

import './styles.scss';

import { GridCell } from '../../components';

const GridRow = ({data, rowIndex}) => {

	document.addEventListener('click', function(e) {
	    e = e || window.event;
	    var target = e.target || e.srcElement;
			if((target.parentNode.classList.contains('grid-cell')) && target.tagName === 'DIV')
			{
				document.querySelectorAll('.grid-cell-controls.active').forEach(item => item.classList.remove('active'));
				var calculate_box = document.getElementsByClassName('formula-input-wrapper')[0];
				calculate_box.children[0].value = '';
			}
			if(!target.parentNode.classList.contains('grid-cell'))
			{
				document.querySelectorAll('.grid-cell-controls.active').forEach(item => item.classList.remove('active'));
			}

			if(!target.parentNode.classList.contains('grid-cell') && !target.parentNode.classList.contains('formula-input-wrapper'))
			{
				var calculate_box = document.getElementsByClassName('formula-input-wrapper')[0];
				calculate_box.children[0].value = '';
			}

	}, false);

	return (
		<div className="grid-row">
			{
				rowIndex === 0 &&
				<div className="grid-head">
					{
						data.map((item, i) => <div className="col-head" key={"col"+(i-1)}>{i}</div>)
					}
				</div>
			}
			<div className="grid-content">
				{
					data.map((item, i) => <GridCell data={item} colIndex={i} rowIndex={rowIndex} key={i} />)
				}
			</div>
		</div>
	)
}

export default GridRow;
