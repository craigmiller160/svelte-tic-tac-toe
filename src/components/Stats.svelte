<style lang="scss">
	.stats {
		display: flex;
		flex-direction: column;

		h2 {
			text-align: center;
		}

		.row {
			display: flex;
			flex-direction: row;
			align-items: center;

			&.highlight {
				border: 2px solid green;
				background: lightgreen;
			}

			p {
				margin-right: 1rem;
			}
		}

		p {
			font-size: 1.17em;
		}
	}
</style>

<script lang="ts">
	import { game } from '../stores';
	import type { Game, Player } from '../types/Game';
	import Button from './ui/Button.svelte';
	import { getNextTurn } from '../utils/GameConstants';
	import { calculateWinner } from '../utils/WinnerCalculator';

	let winner: Player | '' = '';
	$: winner = calculateWinner($game) ?? '';

	const toggleCurrentTurn = () =>
		game.update((currentGame: Game) => {
			const nextTurn = getNextTurn(currentGame.currentTurn);
			return {
				...currentGame,
				currentTurn: nextTurn
			};
		});
</script>

<div class="stats">
	<h2>Stats</h2>
	<div class="row">
		<p>
			<strong>Current Turn: </strong>
			<span>{$game.currentTurn}</span>
		</p>
		<Button onClick={toggleCurrentTurn} label="Toggle" />
	</div>
	<div class="row" class:highlight={winner !== ''}>
		<p>
			<strong>Winner: </strong>
			<span>{winner}</span>
		</p>
	</div>
</div>
