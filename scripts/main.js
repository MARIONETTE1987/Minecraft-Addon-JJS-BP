import { system, world, ItemUseAfterEvent, ItemCompleteUseEvent, Direction } from '@minecraft/server';

system.beforeEvents.startup.subscribe(initEvent => {
    initEvent.itemComponentRegistry.registerCustomComponent('pp_red:tig', {
        onUse: e => { e.source.runCommand('say red'); },
    });
});