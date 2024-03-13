import { CommandPermissionLevel } from "bdsx/bds/command";
import { command } from "bdsx/command";
import { events } from "bdsx/event";
import { bedrockServer } from "bdsx/launcher";

events.serverOpen.on(() => {
    command.register("ping", "show ping", CommandPermissionLevel.Normal).overload(
        (param, origin, output) => {
            output.success(`Average ping is ${bedrockServer.rakPeer.GetAveragePing(origin.getEntity()!.getNetworkIdentifier().address) * 2}`)
        },
        {},
    )
})