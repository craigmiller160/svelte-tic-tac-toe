<style lang="scss">
	.square {
		width: 10rem;
		height: 10rem;
		font-size: 5rem;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;

		&.borderRight {
			border-right: 1px solid black;
		}

		&.borderLeft {
			border-left: 1px solid black;
		}

		&.borderTop {
			border-top: 1px solid black;
		}

		&.borderBottom {
			border-bottom: 1px solid black;
		}

		span {
			cursor: pointer;
		}
	}
</style>

<script lang="ts">
	import type { Game, GameKey } from '../types/Game';
	import { game } from '../stores';
	import { getNextTurn } from '../utils/GameConstants';

	export let gameKey: GameKey;

	let borderRight: boolean;
	let borderLeft: boolean;
	let borderTop: boolean;
	let borderBottom: boolean;

	$: borderRight = [
		'topLeft',
		'topCenter',
		'middleLeft',
		'middleCenter',
		'bottomLeft',
		'bottomCenter'
	].includes(gameKey);
	$: borderLeft = [
		'topCenter',
		'topRight',
		'middleCenter',
		'middleRight',
		'bottomCenter',
		'bottomRight'
	].includes(gameKey);
	$: borderTop = [
		'middleLeft',
		'middleCenter',
		'middleRight',
		'bottomLeft',
		'bottomCenter',
		'bottomRight'
	].includes(gameKey);
	$: borderBottom = [
		'topLeft',
		'topCenter',
		'topRight',
		'middleLeft',
		'middleCenter',
		'middleRight'
	].includes(gameKey);

	let showSquareValue: boolean;
	$: showSquareValue = $game[gameKey] !== '';

	const onSquareClick = () =>
		game.update((existingGame: Game) => {
			const nextTurn = existingGame.isClearMode
				? existingGame.currentTurn
				: getNextTurn(existingGame.currentTurn);
			const gameKeyValue = existingGame.isClearMode ? '' : existingGame.currentTurn;
			return {
				...existingGame,
				currentTurn: nextTurn,
				[gameKey]: gameKeyValue
			};
		});
</script>

<div
	class="square"
	class:borderRight
	class:borderLeft
	class:borderTop
	class:borderBottom
	on:click={onSquareClick}
>
	{#if showSquareValue}
		<span>{$game[gameKey]}</span>
	{/if}
</div>
