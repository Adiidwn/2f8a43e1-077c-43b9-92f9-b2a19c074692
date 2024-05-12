import {
  Body,
  Controller,
  Get,
  Headers,
  HttpStatus,
  Post,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Request, Response } from 'express';
import { AuthLoginDto, AuthRegisterDto, AuthUpdateDto } from 'src/dto/auth.dto';
import { QueryParams } from 'src/dto/request.dto';
import { AuthService } from './auth.service';
import { ApiOperation } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: 'register' })
  @Post('/register')
  async register(
    @Body() authRegisterDto: AuthRegisterDto,
    @Res() res: Response,
  ) {
    const data = await this.authService.register(authRegisterDto);

    return res.status(HttpStatus.OK).json(data);
  }

  @ApiOperation({ summary: 'login' })
  @Post('/login')
  async login(@Body() authLoginDto: AuthLoginDto, @Res() res: Response) {
    const data = await this.authService.login(authLoginDto);
    return res.status(HttpStatus.OK).json(data);
  }

  @ApiOperation({ summary: 'auth-check' })
  @Get('/auth-check')
  async authCheck(
    @Req() req: Request,
    @Res() res: Response,
    @Headers() token: string,
  ) {
    const data = await this.authService.authCheck(req, token);
    return res.status(HttpStatus.OK).json(data);
  }

  @ApiOperation({ summary: '' })
  @Get('/')
  async findAll(
    @Res() res: Response,
    @Query() params: QueryParams,
    @Headers() token: string,
  ) {
    const data = await this.authService.findAll(params, token);
    return res.status(HttpStatus.OK).json(data);
  }

  @ApiOperation({ summary: 'logout' })
  @Post('/logout')
  async logout(
    @Req() req: Request,
    @Res() res: Response,
    @Headers() token: string,
  ) {
    const data = await this.authService.logout(req);
    return res.status(HttpStatus.OK).json(data);
  }

  @ApiOperation({ summary: 'update' })
  @Post('/update')
  async updateUser(
    @Body() authDto: AuthUpdateDto,
    @Query() params: QueryParams,
    @Req() req: Request,
  ) {
    return this.authService.updateUser(authDto, params, req);
  }
}
