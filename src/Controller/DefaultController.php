<?php
    
namespace App\Controller;
    
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\Routing\Annotation\Route;
    
class DefaultController extends AbstractController
{
    /**
     * @Route("/{reactRouting}", name="home", defaults={"reactRouting": null})
     * @Route("/{reactRouting}/{reactSubRouting}", name="services", defaults={"reactRouting": null, "reactSubRouting": null})
     */
    public function index(Request $request, \Swift_Mailer $mailer, $reactRouting)
    {
        if($reactRouting == 'contact-form')
        {
            if($request->getMethod() == 'POST' && 0 === strpos($request->headers->get('Content-Type'), 'application/json'))
            {
                $data = json_decode($request->getContent(), true);

                $response = [];
                $hasError = false;

                $error = [
                    'name' => false,
                    'postcode' => false,
                    'phone' => false,
                    'email' => false,
                    'message' => false
                ];

                if(empty($data['name']))
                {
                    $error['name'] = true;
                    $hasError = true;
                }

                if($data['method'] == 'email' && empty($data['email']))
                {
                    $error['email'] = true;
                    $hasError = true;
                }
                else if($data['method'] == 'phone' && empty($data['phone']))
                {
                    $error['phone'] = true;
                    $hasError = true;
                }

                if(empty($data['postcode']))
                {
                    $error['postcode'] = true;
                    $hasError = true;
                }

                if(empty($data['message']))
                {
                    $error['message'] = true;
                    $hasError = true;
                }

                if(!$hasError)
                {
                    $message = (new \Swift_Message('Website Enquiry'))
                        ->setFrom('noreply@prolinecarpet.co.uk')
                        ->setTo(['cathryn@prolinecarpet.co.uk', 'chris@prolinecarpet.co.uk'])
                        ->setBody(
                            $this->renderView(
                                'email.txt.twig',
                                $data
                            ),
                            'text/plain'
                        );

                    $mailer->send($message);

                    $response['success'] = true;
                }
                else
                {
                    $response['error'] = $error;
                }

                return new JsonResponse($response);
            } 
            else
            {
                return new RedirectResponse('https://www.prolinecarpet.co.uk');
            }
        }
        else {
            return $this->render('index.html.twig');
        }
    }
}