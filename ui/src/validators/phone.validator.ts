import { FormControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { PhoneNumberUtil, PhoneNumber } from 'google-libphonenumber';
import { Observable, Observer } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export function PhoneValidator(httpCLient: HttpClient) {
  return (control: FormControl) => {
    return new Observable((observer: Observer<ValidationErrors | null>) => {
      httpCLient.get('https://ipapi.co/json').subscribe(
        (res: any) => {
          try {
            const phoneUtil = PhoneNumberUtil.getInstance();
            const phoneNumber: PhoneNumber = phoneUtil.parseAndKeepRawInput(
              control.value, res.country_code
            );

            if (phoneUtil.isValidNumber(phoneNumber) === true) {
              observer.next(null);
              console.log('true')
            } else {
              observer.next({ error: true, duplicated: true });
              throw new Error();
            }
          } catch (error) {
            observer.next({ error: true, duplicated: true });
          }

          observer.complete();
        }
      );
    });
  };
}

// export class PhoneValidator {
//   static validate(): ValidatorFn {
//     return (event): { [key: string]: boolean } => {
//       if (event.value) {
//         try {
//           const phoneUtil = PhoneNumberUtil.getInstance();
//           const phoneNumber: PhoneNumber = phoneUtil.parseAndKeepRawInput(
//             event.value
//           );

//           if (phoneUtil.isValidNumber(phoneNumber) === true) {
//             return {};
//           } else {
//             throw new Error();
//           }
//         } catch (error) {
//           return {
//             validate: false,
//           };
//         }
//       } else {
//         return {
//           validate: false,
//         };
//       }
//     };
//   }
// }
