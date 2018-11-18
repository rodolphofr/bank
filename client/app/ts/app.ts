import { NegotiationController  } from "./controllers/NegotiationController";

const controller = new NegotiationController();

$('.form').submit(controller.add.bind(controller));
$('#btn-import').click(controller.import.bind(controller));