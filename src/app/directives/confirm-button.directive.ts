import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appConfirmButton]',
})
export class ConfirmButtonDirective {
  // теперь кнопка с такой дирррективой в onConfirmed получит переданный ей метод

  @Input('appConfirmButton') onConfirmed!: () => void;

  // слушаем событие клик на элементе, к которому применена диррректива
  // по событию вызываем onConf, т.е. метод, который в него передан
  // onConf спрашивает подтверждение и в случае положительного результата вызывает метод, переданный в onConfirmed
  @HostListener('click') onConf() {
    const confirmed = confirm('Are you sure');

    if (confirmed) {
      this.onConfirmed();
    }
  }
}
