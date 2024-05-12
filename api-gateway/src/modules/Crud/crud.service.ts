import { HttpService } from '@nestjs/axios';
import { HttpException, Injectable } from '@nestjs/common';
import { Request } from 'express';
import { catchError, map } from 'rxjs';

@Injectable()
export class CrudService {
  constructor(private httpService: HttpService) {}

  async create(aboutDto: any) {
    try {
      const data = this.httpService
        .post(`${process.env.SVC_DB_CRUD}/api/v1/cruds`, aboutDto)
        .pipe(
          map((response) => response.data),
          catchError((e) => {
            throw new HttpException(
              `${e.response.statusText} : ${e.response.data?.errorMessage}`,
              e.response.status,
            );
          }),
        )
        .toPromise();
      return data;
    } catch (error) {
      throw new HttpException(
        `${error.response.statusText} : ${error.response.data?.errorMessage}`,
        error.response.status,
      );
    }
  }

  async getData(params: any, req: Request) {
    try {
      const token = req.headers.authorization?.split(' ')[1];
      const data = this.httpService
        .get(`${process.env.SVC_DB_CRUD}/api/v1/cruds`, {
          params,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .pipe(
          map((response) => response.data),
          catchError((e) => {
            throw new HttpException(
              `${e.response.statusText} : ${e.response.data?.errorMessage}`,
              e.response.status,
            );
          }),
        )
        .toPromise();
      return data;
    } catch (error) {
      throw new HttpException(
        `${error.response.statusText} : ${error.response.data?.errorMessage}`,
        error.response.status,
      );
    }
  }

  async update(dto: any, params: any) {
    try {
      const data = this.httpService
        .post(`${process.env.SVC_DB_CRUD}/api/v1/cruds/update`, dto, {
          params,
        })
        .pipe(
          map((response) => response.data),
          catchError((e) => {
            throw new HttpException(
              `${e.response.statusText} : ${e.response.data?.errorMessage}`,
              e.response.status,
            );
          }),
        )
        .toPromise();
      return data;
    } catch (error) {
      throw new HttpException(
        `${error.response.statusText} : ${error.response.data?.errorMessage}`,
        error.response.status,
      );
    }
  }
}
