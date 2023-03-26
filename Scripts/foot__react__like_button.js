document.querySelectorAll('.dance_floor_square')
	.forEach(domContainer => {
		const floorsquareID = parseInt(domContainer.dataset.floorsquare, 10);
		ReactDOM.render(
			e(DanceSquare, { floorsquareID: floorsquareID }),
			domContainer
		);
	}
);